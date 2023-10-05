import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IMainState } from "./index"

const mainSelector = createFeatureSelector<IMainState>('main')

export const getUsers = createSelector(mainSelector, s => s?.user)
export const getClothing = createSelector(mainSelector, s => s.clothing)