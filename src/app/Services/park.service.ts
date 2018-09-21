import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Park } from '../Shared/Models/Park'

const ApiUrl = 'https://parksandtech.azurewebsites.net/api'

@Injectable()
export class ParkService {

  constructor(private _http: HttpClient) { }

  getAllParks(){
    return this._http.get(`${ApiUrl}/park`, {headers: this.getHeaders() });
  }

  createPark(park: Park){
    return this._http.post(`${ApiUrl}/park`, park, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  getParkByID(id: string){
    return this._http.get(`${ApiUrl}/park/${id}`, { headers: this.getHeaders() });
  }
  updatePark(park: Park){
    return this._http.put(`${ApiUrl}/park`, park, {headers: this.getHeaders()});
  }
}
