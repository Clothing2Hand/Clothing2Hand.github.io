import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClothing } from 'src/app/interfaces';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private clothing$$ = new BehaviorSubject<undefined | null | IClothing>(undefined);
  clothing$ = this.clothing$$.asObservable().pipe(
    filter((val): val is IClothing | null => val !== undefined)
  );  // vzimame samo stoinosti koito ne sa null (sus sig ima clothing)

  clothing: IClothing | null = null;

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.clothing$.subscribe(c => {
      this.clothing = c;   // pravim subscription vseki put kogato danni minat po behaviourSubjecta te da se setnat kato nova stoinost na clothing
    });
  }

  // ISKAME NA VSICHKI ZAQVKI DA BUDAT PRIKACHENI COOKIES AKO IMA TAKIVA !!! VEDNUJ SLED KATO SME SE LOGNALI

  getAllClothes() {
    return this.http.get<IClothing[]>('/api/clothes')
  }

  getClothing(id: string) {
    return this.http.get<IClothing>('/api/clothes/' + id).pipe(tap(c => this.clothing$$.next(c)));
  }

  addClothing(type: string,
    brand: string,
    price: number,
    sizeClothing: string,
    color: string,
    description: string,
    imageUrl: string,
    contactInfo: number,
    adress: string) {
    return this.http.post<IClothing>('/api/clothes/create', { type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress })
      .pipe(tap(c => this.clothing$$.next(c)));
  }

  editClothing(type: string,
    brand: string,
    price: number,
    sizeClothing: string,
    color: string,
    description: string,
    imageUrl: string,
    contactInfo: number,
    adress: string, id: string) {
    return this.http.put<IClothing>('/api/clothes/' + id, { type, brand, price, sizeClothing, color, description, imageUrl, contactInfo, adress })
      .pipe(tap(c => this.clothing$$.next(c))) 
  }

  getClothingInfo(id: string | undefined) {
    return this.http.post<IClothing>('/api/clothes/getClothingInfo', {id}).pipe(tap(clothing => {
      this.clothing$$.next(clothing)
    }))
  }

  deleteClothing(id : string) {
    return this.http.delete('/api/clothes/' + id).pipe(tap(() => {
      this.clothing$$.next(null)
    }))
  }

  buyClothing(id : string) {
    return this.http.get('/api/clothes/buy/' + id)
  }
}
