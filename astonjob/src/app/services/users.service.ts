import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://localhost:3000/registerapi';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users: User[] = [];
  private userUrl = 'https://localhost:3000/authentication';  // URL to web api

  @Input() id: Number;
  @Input() name: string;
  @Input() prenom: string;
  @Input() email: string;
  @Input() password: string;
  @Input() index: number;

  constructor(private http: HttpClient) { }

  // ajouter ne pas oublier le return, en paramètre l'adresse de l'api et le user
  /*
  add(user: User) {
    return this.http.post(API_BASE_URL, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }
*/
// 3000/registerapi
  addUser(users: User): Observable<User> {
    return this.http.post<User>(API_BASE_URL, users, httpOptions); // register
  }

  // authentification--3000/login
  loginUser (user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions); // authentication
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>('/users');
}

/*
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }
*/

}
