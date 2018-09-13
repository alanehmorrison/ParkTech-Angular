import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';

const Api_Url = 'https://parksandtech.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this._http.post('${Api_Url}/api/Account/Register', regUserData);
  }
}
