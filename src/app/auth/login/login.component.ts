import { Component, NgZone, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ErrorService } from 'src/app/error.service';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/+store/selectors';
import { loadUsers } from 'src/app/+store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  get apiError(){
    return this.errorService.apiError
  }

  constructor(private authService: AuthService, private router: Router, private activatedRoute : ActivatedRoute, private errorService : ErrorService,private store : Store){}

  loginHandler(form: NgForm){
    if(form.invalid){return}

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/' // ako imash zakachen queryParams koito da se kazva 'returnUrl'

    const { username,  password } = form.value
    this.authService.login( username!, password!).subscribe({
      next : (user) => {
        //window.location.pathname[returnUrl]

        this.store.dispatch(loadUsers())
        this.router.navigate([returnUrl])
      },
      error : (err) => {
        //console.log(err.message)
      }
    })
  }
  ngOnDestroy(): void {
    this.errorService.apiError$$.next(null)
  }
}
