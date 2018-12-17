import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatNativeDateModule,
  MatSelectModule } from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddComponent } from './jobs/add/add.component';
import { ListComponent } from './jobs/list/list.component';
import { DetailsComponent } from './jobs/details/details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { JobsService } from './services/jobs.service';
import { FlashmsgComponent } from './flashmsg/flashmsg.component';
import { DeleteComponent } from './jobs/delete/delete.component';
import { FlashmsgService } from './services/flashmsg.service';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: ListComponent },
  { path: 'jobs/add', component: AddComponent },
  { path: 'jobs/delete/:id', component: DeleteComponent },
  { path: 'jobs/:id', component: DetailsComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    HomeComponent,
    FourOhFourComponent,
    FlashmsgComponent,
    DeleteComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    JobsService,
    FlashmsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
