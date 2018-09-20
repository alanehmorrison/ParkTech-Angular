import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule,
         MatButtonModule, 
         MatFormFieldModule, 
         MatInputModule,
         MatTableModule,
         MatSelectModule, } from '@angular/material';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './Shared/home/home.component';
import { LoginComponent } from './Shared/login/login.component';
import { AuthService } from '../app/Shared/services/auth.service';
import { ParksService } from './services/parks.service';
import { TrailsService } from './Services/trails.service';
import { MyparksService } from './Services/myparks.service';
import { ParkIndexComponent } from './components/parks/park-index/park-index.component';
import { MyparkIndexComponent } from './components/myparks/mypark-index/mypark-index.component';
import { TrailsIndexComponent } from './components/trails/trails-index/trails-index.component';
import { ParkCreateComponent } from './components/parks/park-create/park-create.component';
import { MyparksCreateComponent } from './components/myparks/myparks-create/myparks-create.component';
import { TrailsCreateComponent } from './components/trails/trails-create/trails-create.component';
import { ParkDetailComponent } from './components/parks/park-detail/park-detail.component';
import { ParkEditComponent } from './components/parks/park-edit/park-edit.component';
import { ParkDeleteComponent } from './components/parks/park-delete/park-delete.component';

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'park', component: ParkIndexComponent},
  { path: 'mypark', component: MyparkIndexComponent},
  { path: 'trail', component: TrailsIndexComponent},
  {
    path: 'park', children: [
      { path: '', component: ParkIndexComponent },
      { path: 'create', component: ParkCreateComponent},
      { path: 'details/:id', component: ParkDetailComponent},
      { path: 'delete/:id', component: ParkDeleteComponent},
    ]
  },
  {
    path: 'trail', children: [
      { path: '', component: TrailsIndexComponent },
      { path: 'create', component: TrailsCreateComponent}
    ]
  },
  {
    path: 'mypark', children: [
      { path: '', component: MyparkIndexComponent },
      { path: 'create', component: MyparksCreateComponent}
    ]
  },
  { path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ParkIndexComponent,
    MyparkIndexComponent,
    TrailsIndexComponent,
    ParkCreateComponent,
    MyparksCreateComponent,
    TrailsCreateComponent,
    ParkDetailComponent,
    ParkEditComponent,
    ParkDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot( appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    ParksService,
    TrailsService,
    MyparksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
