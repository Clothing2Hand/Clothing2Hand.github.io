import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { IClothing, IUser } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/+store/selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{

  user!: IUser | null

  constructor(private store: Store) {
    
  }

  ngOnInit(): void {
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })
  }
}
