import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/+store/actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router,private store : Store) {
    this.authService.logout().subscribe({
      next: () => {
        this.store.dispatch(loadUsers())
        this.router.navigate(['/'])
      }
    })
  }
}
