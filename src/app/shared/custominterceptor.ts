import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHeaders, HttpParams, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            withCredentials: true
        });

        return next.handle(request);
    }
}