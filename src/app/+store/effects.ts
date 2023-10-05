import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadClothing, loadClothingFailiure, loadClothingSuccess, loadUsers, loadUsersFailiure, loadUsersSuccess } from "./actions";
import { switchMap, map, catchError } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { ClothesService } from "../clothes/clothes.service";


@Injectable({
    providedIn: 'root'
})
export class Effects {
    loadusers = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => this.authService.getProfileInfo().pipe(  // efekta e che burkame v bazata danni!!! ot tam idvat dannite
            map(user => loadUsersSuccess({ user })),
            catchError(err => [loadUsersFailiure({ error: err })])
        ))
    ))
    
    // CVETI ?????????
    // ofType(loadClothing),
    // switchMap(() => this.clothingService.getClothingInfo().pipe(  // efekta e che burkame v bazata danni!!! ot tam idvat dannite
    //     map(clothing => loadClothingSuccess({ clothing })),
    //     catchError(err => [loadClothingFailiure({ error : err })] )
    // ))

    constructor(private authService: AuthService, private actions$: Actions, private clothingService: ClothesService) { }
}