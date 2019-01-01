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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashmsgService: FlashmsgService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({ // data du formulaire
      name: '',
      prenom: '',
      email: '',
      password: '',
    });
  }
  /*
    initForm() {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]] // Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
    }
  */

  addUser() {
    this.userService
      .addUser(this.signupForm.value)
      .subscribe(
        (users: User) => {
          this.flashmsgService.add('User ajouté', 'success');
          this.signupForm.reset();
          this.router.navigate(['/auth/signin']);
        },
        (err) => {
          console.log('Une erreur est survenue');
        }
      );
  }

  /*
  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          console.log(this.users);
          this.users = this.users;
        }
      );
  }
  */

}

