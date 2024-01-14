import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appUsernameValidator } from 'src/app/shared/validators/app.username';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/matchPassword';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/interfaces';
import { Route, Router } from '@angular/router';
import { ErrorService } from 'src/app/error.service';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/+store/actions';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy{
  registerForm = this.fb.group({
    username: ['', [Validators.required, appUsernameValidator()]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required]], // personal validation + digits and symbols
      rePass: ['', [Validators.required]] //personal equal
    }, {
      validators: [matchPasswordGroupValidator('password', 'rePass')]
    }),
  })

  get apiError(){
    return this.errorService.apiError
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private errorService : ErrorService, private store: Store) {
  }

  registerHandler() {
    if (this.registerForm.invalid) { return }

    const { username, firstName, lastName, email, pass: { password, rePass } = {} } = this.registerForm.value
    this.authService.register( username!, firstName!, lastName!, email!, password!).subscribe({
      next : (user) => {
        this.router.navigate(['/'])
        this.store.dispatch(loadUsers())
      },
      error : (err) => {
        console.log(err.error.message)
      }
    })
  }

  ngOnDestroy(): void {
    this.errorService.apiError$$.next(null)
  }
}
