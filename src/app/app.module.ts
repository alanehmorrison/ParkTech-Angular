import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule,
         MatButtonModule, 
         MatFormFieldModule, 
         MatInputModule,
         MatTableModule } from '@angular/material';
import { RegistrationComponent } from './Shared/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './Shared/home/home.component';
import { LoginComponent } from './Shared/login/login.component';
import { AuthService } from '../app/Shared/services/auth.service';
import { ParkService } from './Services/park.service';
import { TrailService } from './Services/trail.service';
import { MyParkService } from './Services/mypark.service';
import { ParkIndexComponent } from './components/parks/park-index/park-index.component';
import { MyParkIndexComponent } from './components/myparks/mypark-index/mypark-index.component';
import { TrailIndexComponent } from './components/trails/trail-index/trail-index.component';
import { ParkCreateComponent } from './components/parks/park-create/park-create.component';
import { MyParkCreateComponent } from './components/myparks/mypark-create/mypark-create.component';
import { TrailCreateComponent } from './components/trails/trail-create/trail-create.component';
import { TrailDetailComponent } from './components/trails/trail-detail/trail-detail.component';
import { TrailEditComponent } from './components/trails/trail-edit/trail-edit.component';
import { TrailDeleteComponent } from './components/trails/trail-delete/trail-delete.component';
import { ParkDetailComponent } from './components/parks/park-detail/park-detail.component';
import { ParkEditComponent } from './components/parks/park-edit/park-edit.component';
import { ParkDeleteComponent } from './components/parks/park-delete/park-delete.component';
import { MyParkDetailComponent } from './components/myparks/mypark-detail/mypark-detail.component';
import { MyParkEditComponent } from './components/myparks/mypark-edit/mypark-edit.component';
import { MyParkDeleteComponent } from './components/myparks/mypark-delete/mypark-delete.component';
import { AboutComponent } from './components/about/about/about.component';
import { ContactComponent } from './components/contact/contact/contact.component';

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'park', component: ParkIndexComponent},
  { path: 'mypark', component: MyParkIndexComponent},
  { path: 'trail', component: TrailIndexComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  {
    path: 'park', children: [
      { path: '', component: ParkIndexComponent },
      { path: 'create', component: ParkCreateComponent},
      { path: 'detail/:id', component: ParkDetailComponent},
      { path: 'edit/:id', component: ParkEditComponent},
      { path: 'delete/:id', component: ParkDeleteComponent}
    ]
  },
  {
    path: 'trail', children: [
      { path: '', component: TrailIndexComponent },
      { path: 'create', component: TrailCreateComponent},
      { path: 'detail/:id', component: TrailDetailComponent},
      { path: 'edit/:id', component: TrailEditComponent},
      { path: 'delete/:id', component: TrailDeleteComponent}
    ]
  },
  {
    path: 'mypark', children: [
      { path: '', component: MyParkIndexComponent },
      { path: 'create', component: MyParkCreateComponent},
      { path: 'detail', component: MyParkDetailComponent}
    ]
  },
  { path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ParkIndexComponent,
    ParkCreateComponent,
    ParkDetailComponent,
    ParkEditComponent,
    ParkDeleteComponent,
    TrailIndexComponent,
    TrailCreateComponent,
    TrailDetailComponent,
    TrailEditComponent,
    TrailDeleteComponent,
    MyParkIndexComponent,
    MyParkCreateComponent,
    MyParkDetailComponent,
    MyParkEditComponent,
    MyParkDeleteComponent,
    AboutComponent,
    ContactComponent,
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
    ParkService,
    TrailService,
    MyParkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
