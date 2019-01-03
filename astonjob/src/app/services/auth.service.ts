import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';

const API_BASE_URL = 'https://localhost:3000';
const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 API_URL = 'https://localhost:3000';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
    private router: Router,
    private cookieService: CookieService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

login(email: string, password: string) {
  const data = {
      email: email,
      password: password
  };

  return this.http.post<User>(`${API_BASE_URL}/authentication`, data)
      .pipe(tap(user => {
          console.log(user);
      }))
      .pipe(map(user => {
          // login successful if there's a jwt token in the response.
          if (user) {
              // store user details and jwt token in local storage to
              // keep user logged in between pages refresh.
              localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
              this.currentUserSubject.next(user);
          }
          return user;
      }));
}

/*
login(email: string, password: string) {
    return this.http.post<User>(`${this.API_URL}/authentication`,
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
*/
/*
  checkToken() {
    return this.cookieService.check('token');
  }

  getToken() {
    return this.cookieService.get('token');
  }

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/auth/signin']);
  }

  isLoggedIn() {
    return this.cookieService.check('token') !== null; // !== null
  }
*/
  register(name, prenom, password, email) {
    return this.http.post<any>(`${API_BASE_URL}/register`,
      new HttpParams({ fromObject: { name, prenom, password, email } }),
     /* {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }
      */
    )
      .pipe(map(user => {
        console.log(user);
        return user;
      }));
  }


  logout() {
    // remove user form local storage to log user out.
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    this.currentUserSubject.next(null);
}

}
