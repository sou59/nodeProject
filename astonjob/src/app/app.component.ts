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
  // title = 'astonjob';


  @Input() jobs: Job[] = [];
  @Input() id: Number;
  @Input() title: string;
  @Input() company: string;
  @Input() city: string;
  @Input() zipcode: string;
  @Input() description: string;
  @Input() contractTypes: number;
  @Input() startDate: Date;
  @Input() index: number;

  constructor() {
/*
const routes = [
    { path: 'login', component: SignupComponent },
    {
        path: 'jobs',
        component: ListComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
*/
    const config = {
      authDomain: 'http://localhost:3000',
      databaseURL: 'http://localhost:3000/jobs',
    };
  }

}
