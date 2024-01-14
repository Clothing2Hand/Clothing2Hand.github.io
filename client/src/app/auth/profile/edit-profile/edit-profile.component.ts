import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/error.service';
import { AuthService } from '../../auth.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appUsernameValidator } from 'src/app/shared/validators/app.username';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/+store/selectors';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  user!: IUser | null
  
  constructor(private errorService: ErrorService, private authService : AuthService, private fb : FormBuilder, private router : Router, private store : Store){
    
  }

  ngOnInit(): void {
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })
  }

  profileForm = this.fb.group({
    username: [this.user?.username, [Validators.required, appUsernameValidator()]],
    firstName: [this.user?.firstName, [Validators.required, Validators.minLength(2)]],
    lastName: [this.user?.lastName, [Validators.required, Validators.minLength(2)]],
    email: [this.user?.email, [Validators.required, Validators.email]]
  })

  get apiError(){
    return this.errorService.apiError
  }


  editHandler(){
    if(this.profileForm.invalid){return}

    const {username, firstName, lastName, email} = this.profileForm.value

    this.authService.updateProfile(username!, firstName!, lastName!, email!).subscribe({
      next : () => {
        this.router.navigate(['/auth/myProfile'])
      }, 
      error : (err) => {
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    this.errorService.apiError$$.next(null)
  }
}
