import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyPark } from '../Shared/Models/MyPark';

const ApiUrl = 'https://parksandtech.azurewebsites.net/api'

@Injectable()
export class MyparksService {

  constructor(private _http: HttpClient) { }

  getMyParks(){
    return this._http.get(`${ApiUrl}/mypark`, {headers: this.getHeaders() });
  }

  createMyPark(mypark: MyPark){
    return this._http.post(`${ApiUrl}/mypark`, mypark, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

