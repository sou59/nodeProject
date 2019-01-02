import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FlashmsgService } from 'src/app/services/flashmsg.service';
import { User } from 'src/app/models/User';
import { CookieService } from 'ngx-cookie-service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UsersService,
    private flashmsgService: FlashmsgService,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status.
    this.authService.logout();

    // Get return url form route parameters or default to '/'.
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.loginForm.controls;
  }


  /*
    onSubmit() {
      const email = this.signInForm.get('email').value;
      const password = this.signInForm.get('password').value;
      this.authService.login(email, password).subscribe(
        () => {
          this.router.navigate(['/authentication']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  */
  /*
   login() {
     const email = this.signInForm.get('email').value;
     const password = this.signInForm.get('password').value;
     // On récupère l'url de redirection
    // const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';

     this.authService
       .login(email, password)
       .subscribe(
         (user: User) => {
           this.flashmsgService.add('User valide', 'success');
           this.signInForm.reset();
           // On accède à la page souhaitée
          // this.router.navigate([redirectUrl]);
          this.router.navigate(['/jobs']);
         },
         (err) => {
           console.log('Une erreur est survenue');
         }
       );
   }
 */

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.form.email.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.errorMessage = error;
        }
      );
  }
}
