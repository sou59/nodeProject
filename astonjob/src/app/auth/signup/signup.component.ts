import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { FlashmsgService } from '../../services/flashmsg.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: User[];
  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashmsgService: FlashmsgService,
    private userService: UsersService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({ // data du formulaire
      name: '',
      email: '',
      password: '',
    });
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]] // Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const name = this.signupForm.get('name').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.authService.register(name, email, password).subscribe(
      () => {
        this.router.navigate(['/user']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  /*
  onSubmit() {
    this.authService.register(name, password, email).subscribe(
      (user: User) => {
        this.flashmsgService.add('User ajouté', 'success');
        this.signupForm.reset();
        this.router.navigate(['auth/signin']);
      },
      (err) => {
        console.log('Une erreur est survenue');
      }
    );
  }
*/
  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        customers => {
          console.log(this.users);
          this.users = this.users;
        }
      );
  }

}

