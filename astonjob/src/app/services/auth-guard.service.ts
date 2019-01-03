import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private usersService: UsersService, private router: Router,
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      console.log(currentUser);
      // logged in so return true.
      return true;
    }

    this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }

/*
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
  boolean {
    const isLoggedIn = this.authService.isLoggedIn();
  if (!isLoggedIn) {
    this.router.navigate(['/auth/signin']);
    console.log('Vous êtes non connectés');
    return false;
  }
  return true;

}
*/

}
