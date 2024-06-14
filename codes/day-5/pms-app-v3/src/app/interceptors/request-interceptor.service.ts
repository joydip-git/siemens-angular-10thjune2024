import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token')
        if (token) {
            const clonedRequest = req.clone({
                headers: req.headers.append(
                    'Authorization',
                    `Bearer ${token}`
                )
            })
            return next.handle(clonedRequest)
        } else
            return next.handle(req)
    }
}