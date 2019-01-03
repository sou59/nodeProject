import { Component, Input } from '@angular/core';
import { Job } from './models/Job';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './jobs/add/add.component';
import { ListComponent } from './jobs/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'astonjobs';

/*
  constructor() {

    const config = {
      authDomain: 'https://localhost:3000',
      databaseURL: 'https://localhost:3000/jobs',
    };
  }
*/
}
