import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyPark } from '../Shared/Models/MyPark';

const ApiUrl = 'https://parksandtech.azurewebsites.net/api'

@Injectable()
export class MyParkService {

  constructor(private _http: HttpClient) { }

  getAllMyParks(){
    return this._http.get(`${ApiUrl}/mypark`, {headers: this.getHeaders() });
  }

  getMyParkByID(id: string){
    return this._http.get(`${ApiUrl}/mypark/${id}`, { headers: this.getHeaders()});
  }

  createMyPark(myPark: MyPark){
    return this._http.post(`${ApiUrl}/mypark`, myPark, {headers: this.getHeaders()});
  }

  deleteMyPark(){}

  updateMyPark(myPark: MyPark){
    return this._http.put(`${ApiUrl}/mypark`, myPark, { headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

