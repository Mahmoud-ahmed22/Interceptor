import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log("Interceptor")

    request = request.clone({
      setHeaders: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDM1MzU3ODEsImV4cCI6MTc0MzU3ODk4MX0.IMpOIJhQjgCxEGeTk0xRrxwPXAJMwWZAAjA-9sh8qKU',
      }
    })
  
    return next.handle(request);
  }
}
