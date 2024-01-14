import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/+store/selectors';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  user! : IUser | null
  
  constructor (private store : Store){
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })
  }
  
}
