import { IClothing } from "./clothing"

export interface IUser{
    _id: string
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    boughtClothing: Array<IClothing>
}