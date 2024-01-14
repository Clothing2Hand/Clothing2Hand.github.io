import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  apiError : Error | null = null
  apiError$$ = new BehaviorSubject(null)
  apiError$ = this.apiError$$.asObservable()

  subscription : Subscription;

  constructor() { 
    this.subscription = this.apiError$.subscribe(e => {
      this.apiError = e
    })
  }

  setError(err: any){
    this.apiError$$.next(err.error)
  }
}
