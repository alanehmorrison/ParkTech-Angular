import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Token } from 'src/app/Shared/Models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${ApiUrl}api/Account/Register`, regUserData);
  }

  login(loginInfo){
    const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
   
    return this._http.post(`${ApiUrl}/Token`, str).subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${ApiUrl}/api/Account//UserInfo`, {headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${ApiUrl}/api/Account/Logout`, {headers: this.setHeader});
    
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
