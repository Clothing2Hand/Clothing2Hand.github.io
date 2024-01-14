import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core"
import { Observable, catchError, throwError } from "rxjs";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment.development'
import { ErrorService } from "./error.service";

const apiUrl = environment.apiUrl

@Injectable() // ne moje da izpolzvame provided in zashtoto tr da izpolzvame multi : true +> suzdavaem si go nie sami
export class AppInterceptor implements HttpInterceptor {
    constructor(private router: Router, private errorService: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ne vsichki zaqvki shte zapochvat s api -- samo tezi ot auth service 
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }

        return next.handle(req)
            .pipe(
                catchError((err) => {
                    this.errorService.setError(err)
                    //return throwError(() => err);
                    return[err]
                })
            )
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true // moje da ima poveche ot edna stoinost 
}