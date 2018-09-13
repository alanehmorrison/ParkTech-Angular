import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthService } from '../app/Shared/Services/auth.service';

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent
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
    MatInputModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
