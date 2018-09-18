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
         MatTableModule } from '@angular/material';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthService } from '../app/Shared/Services/auth.service';
import { ParksService } from './services/parks.service';
import { TrailsService } from './Services/trails.service';
import { MyparksService } from './Services/myparks.service';
import { ParkIndexComponent } from './components/parks/park-index/park-index.component';
import { MyparkIndexComponent } from './components/myparks/mypark-index/mypark-index.component';
import { TrailsIndexComponent } from './components/trails/trails-index/trails-index.component';

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'parks', component: ParkIndexComponent},
  { path: 'myparks', component: MyparkIndexComponent},
  { path: 'trails', component: TrailsIndexComponent},
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
    TrailsIndexComponent
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
    MatTableModule
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
