import { ActionReducerMap, createReducer, on } from "@ngrx/store"
import { loadClothingSuccess, loadUsersSuccess } from "./actions"
import { IClothing, IUser } from "../interfaces"

export interface IMainState {
    user: null | IUser,
    clothing: IClothing | null
}
export interface IAppState {
    main: IMainState
}

const mainInitialState = {
    user: null,
    clothing: null
}

const mainReducer = createReducer<IMainState>(mainInitialState,
    on(loadUsersSuccess, (state, action) => {
        const { user } = action
        return { ...state, user }
    }),
    on(loadClothingSuccess, (state, action) => {
        const { clothing } = action
        return { ...state, clothing }
    })
)

export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer, //feachure e klucha
} 