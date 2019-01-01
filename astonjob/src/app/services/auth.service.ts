import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthService {

  API_URL = 'http://localhost:3000';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService) { }

  checkToken() {
    return this.cookieService.check('token');
  }

  getToken() {
    return this.cookieService.get('token');
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.API_URL}/authentication`,
      new HttpParams({ fromObject: { email, password } }),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).pipe(map(user => {
      if (user && user.token) {
        this.cookieService.set('token', user.token);
      }
      return user;
    }));
  }

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/auth/signin']);
  }

  isLoggedIn() {
    return this.cookieService.check('token') !== null; // !== null
  }

  register(name, prenom, password, email) {
    return this.http.post<any>(`${this.API_URL}/register`,
      new HttpParams({ fromObject: { name, prenom, password, email } }),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .pipe(map(user => {
        console.log(user);
        return user;
      }));
  }

}
