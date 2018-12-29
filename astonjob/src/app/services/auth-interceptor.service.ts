import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector,
                public auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (this.auth.isLoggedIn()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.auth.getToken()}`
          }
        });
      }

      return next.handle(request);
    }

}
