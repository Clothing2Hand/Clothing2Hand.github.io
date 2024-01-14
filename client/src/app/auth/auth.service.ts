import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClothing, IUser } from '../interfaces';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getUsers } from '../+store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user! : IUser | null

  // ILIA : 

  // private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  // user$ = this.user$$.asObservable().pipe(
  //   filter((val): val is IUser | null => val !== undefined)
  // );

  // user: IUser | null = null;

  // get isLoggedIn() {
  //   return this.user !== null;
  // }

  // subscription: Subscription;

  constructor(private http: HttpClient, private store: Store) {
    // this.subscription = this.user$.subscribe(user => {
    //   this.user = user;
    // });
    this.store.select(getUsers).subscribe(u => {
      this.user = u
    })

  }

  register(username: string, firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<IUser>('/api/auth/register', { username, firstName, lastName, email, password })
      // .pipe(tap(user => this.user$$.next(user)));
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/auth/login', { username, password })
      // .pipe(tap(user => this.user$$.next(user)));;
  }

  logout() {
    return this.http.get<void>('/api/auth/logout')
      // .pipe(tap(() => this.user$$.next(null)));;
  }

  getProfileInfo() {
    return this.http.get<IUser>('/api/auth/getUser').pipe(tap(user => {
      // this.user$$.next(user)
    }))
  }

  updateProfile(username: string, firstName: string, lastName: string, email: string) {
    return this.http.put<IUser>('/api/auth/profile/edit', { username, firstName, lastName, email }).pipe(tap(user => {
      // this.user$$.next(user)
    }))
  }


  // user: IUser | null = null
  // private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined)
  // user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined))

  // subscription: Subscription //da si vzimame subscriptiona ot samiq observable

  // constructor(private http: HttpClient) {
  //   this.subscription = this.user$.subscribe(user => {
  //     this.user = user
  //   })
  // }

  // login(username: string, password: string) {
  //   return this.http.post<IUser>('/api/auth/login', { username, password })
  //     .pipe(tap(user => {
  //       this.user$$.next(user)
  //     }))
  // }

  // register(username: string, firstName: string, lastName: string, email: string, password: string) {
  //   return this.http.post<IUser>('/api/auth/register', { username, firstName, lastName, email, password }).pipe(tap(user => {
  //     this.user$$.next(user)
  //   }))
  // }

  // logout() {
  //   return this.http.get<void>('/api/auth/logout').pipe(tap(() => {
  //     this.user$$.next(null)
  //   }))
  // }

  // getProfileInfo() {
  //   return this.http.get<IUser>('/api/auth/getUser').pipe(tap(user => {
  //     this.user$$.next(user)
  //   }))
  // }
}
