import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  username: string; 
  isLoggedIn: boolean;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedInUserStatus: boolean) => {
      console.log( loggedInUserStatus);
      this.isLoggedIn = loggedInUserStatus;
    });
  }

  onLoggout(){
    this.authService.logout();
  }
}
export interface UserData {
  user: string;
  isloggedin: boolean;
}
