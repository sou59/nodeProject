import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private usersService: UsersService, private router: Router,
    private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
   boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      console.log('Vous êtes non connectés');
      this.router.navigate(['/auth/signin'], { queryParams: { redirectUrl: state.url }}
     // this.router.navigate(['/signin']
      );
      return false;
    }
  }
  // return this.authService.isLoggedIn();
}
