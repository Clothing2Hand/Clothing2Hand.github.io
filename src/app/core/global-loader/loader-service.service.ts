import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoaderServiceService {
  title: string | null = null

  constructor() { }

  showLoader(title:string):void{
    this.title = title
  }

  hideLoader():void{
    this.title = null
  }
}
