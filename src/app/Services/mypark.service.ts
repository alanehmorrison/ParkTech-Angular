import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyPark } from '../Shared/Models/MyPark';
import { ApiUrl } from '../../environments/environment.prod';

@Injectable()
export class MyParkService {

  constructor(private _http: HttpClient) { }

  getAllMyParks(){
    return this._http.get(`${ApiUrl}/api/mypark`, {headers: this.getHeaders() });
  }

  getMyParkByID(id: string){
    return this._http.get(`${ApiUrl}/api/mypark/${id}`, { headers: this.getHeaders()});
  }

  createMyPark(myPark: MyPark){
    return this._http.post(`${ApiUrl}/api/mypark`, myPark, {headers: this.getHeaders()});
  }

  deleteMyPark(id: number){
    return this._http.delete(`${ApiUrl}/api/mypark/${id}`, { headers: this.getHeaders()});
  }

  updateMyPark(myPark: MyPark){
    return this._http.put(`${ApiUrl}/api/mypark`, myPark, { headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

