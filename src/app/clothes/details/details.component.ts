import { Component, OnInit } from '@angular/core';
import { IClothing, IUser } from 'src/app/interfaces';
import { ClothesService } from '../clothes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/+store/selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user!: IUser | null

  clothing!: IClothing
  isOwner = false
  hasUser = !!this.authService.user
  clothingId = this.activatedRoute.snapshot.params['id']


  constructor(private clothesService: ClothesService, private activatedRoute: ActivatedRoute, private router: Router, private store: Store,private authService : AuthService) {
  }

  ngOnInit(): void {
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })

    this.clothesService.getClothing(this.clothingId).subscribe({
      next: (c) => {
        this.clothing = c
        if ((this.clothing.owner).toString() == this.user?._id) {
          this.isOwner = true
        }

      }
    })
  }

  deleteHandler() {
    if(window.confirm('Are you sure you want to delete this?')){   /// TOAST
      this.clothesService.deleteClothing(this.clothingId).subscribe({
        next: () => {
          this.router.navigate(['/clothes/catalog'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
    
  }

  buyHandler() {
    this.clothesService.buyClothing(this.clothingId).subscribe({
      next: () => {
        alert('you bought this')  //TOAST
        //tr da se prerenderira komponentata !!!!!!!
        this.router.navigate(['/clothes/catalog'])
        //this.router.navigate(['/clothes/' + this.clothingId])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}


