import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '../+store/selectors';
import { IUser } from '../interfaces';

import { loadUsers, loadUsersFailiure, loadUsersSuccess } from '../+store/actions';
import { map, merge } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { LoaderServiceService } from '../core/global-loader/loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user! : IUser | null

  isFetchingUsers = merge(
    this.actions$.pipe(
      ofType(loadUsers),
      map(() => {
        this.globalLoader.showLoader('Loading...')
        // return true
      })
    ), 
    this.actions$.pipe(
      ofType(loadUsersSuccess),
      map(() => {
        this.globalLoader.hideLoader()
        // return false
      })
    ),
    this.actions$.pipe(
      ofType(loadUsersFailiure),
      map(() => {
        this.globalLoader.hideLoader()
        // return false
      })
    )
  )
  
  constructor (private store : Store, private actions$ : Actions, private globalLoader: LoaderServiceService){
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })
  }
}
