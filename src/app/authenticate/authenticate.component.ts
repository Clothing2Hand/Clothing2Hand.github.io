import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ObservableInput, forkJoin } from 'rxjs';
import { LoaderServiceService } from '../core/global-loader/loader-service.service';
import { ClothesService } from '../clothes/clothes.service';
import { ActivatedRoute, RouterState, RouterStateSnapshot } from '@angular/router';
import { IClothing, IUser } from '../interfaces';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  // isAuthenticating = true
  // constructor(private authService: AuthService, private globalLoader: LoaderServiceService) { 
  //   this.globalLoader.showLoader('Loading...')
  // }

  // ngOnInit(): void {

  //   this.authService.getProfileInfo().subscribe({
  //     next: (user) => {
  //       this.globalLoader.hideLoader()
  //       this.authService.user = user
  //       this.isAuthenticating = false
  //     },
  //     error: () => {
  //       this.globalLoader.hideLoader()
  //       this.authService.user = null
  //       this.isAuthenticating = false
  //     }
  //   })
  // }
//-----------------------------------------------------------------------------------------------------
  // isAuthenticating = true;

  // constructor(private authService: AuthService, private globalLoader: LoaderServiceService, private clothService: ClothesService, private activatedRoute: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.authService.getProfileInfo().subscribe({
  //     next: (c) => {
  //       this.isAuthenticating = false;
  //       this.globalLoader.hideLoader()
  //     },
  //     error: (err) => {
  //       this.isAuthenticating = false;
  //       this.globalLoader.hideLoader()
  //     }
  //   })
  //-----------------------------------------------------------------------------------------------

    // let sources = [
    //   this.authService.getProfileInfo(),
    //   this.clothService.getClothingInfo()
    // ]

    // forkJoin(sources).subscribe({
    //   next: () => {
    //     this.isAuthenticating = false;
    //     // this.clothService.getClothingInfo().subscribe(c => console.log(c))
    //     this.globalLoader.hideLoader()
    //   },
    //   error: (err) => {
    //     console.log(err)
    //     this.isAuthenticating = false;
    //     this.globalLoader.hideLoader()
    //   }
    // })

 // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   window.location.reload()
  // }

}
