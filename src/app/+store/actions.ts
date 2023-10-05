import { createAction, props } from "@ngrx/store"
import { IClothing, IUser } from "../interfaces"

const actionTypes = {
    loadUsers: 'LOAD_USERS',
    loadUsersSuccess: 'LOAD_USERS_SUCCESS',
    loadUsersFailiure: 'LOAD_USERS_FAILIURE',

    loadClothing: 'LOAD_CLOTHING',
    loadClothingSuccess: 'LOAD_CLOTHING_SUCCESS',
    loadClothingFailiure: 'LOAD_CLOTHING_FAILIURE',
}

export const loadUsers = createAction(actionTypes.loadUsers)
export const loadUsersSuccess = createAction(actionTypes.loadUsersSuccess, props<{ user : IUser }>()) // efekta mi dava user ot bazata danni kato pravi zaqvka
export const loadUsersFailiure = createAction(actionTypes.loadUsersFailiure, props<{ error: any }>())

export const loadClothing = createAction(actionTypes.loadClothing)
export const loadClothingSuccess = createAction(actionTypes.loadClothingSuccess, props<{ clothing : IClothing }>()) //efekta i dava clothinga ot bazata danni 
export const loadClothingFailiure = createAction(actionTypes.loadClothingFailiure, props<{ error: any }>())
