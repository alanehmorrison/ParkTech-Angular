import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trail } from '../Shared/Models/Trail';

const ApiUrl = 'https://parksandtech.azurewebsites.net/api'

@Injectable()
export class TrailsService {

  constructor(private _http: HttpClient) { }

  getTrails(){
    return this._http.get(`${ApiUrl}/trail`, {headers: this.getHeaders() });
  }

  getTrail(id: string){
    return this._http.get(`${ApiUrl}/trail/${id}`, { headers: this.getHeaders() });
  }

  createTrail(trail: Trail){
    return this._http.post(`${ApiUrl}/trail`, trail, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  updateTrail(trail: Trail){
    return this._http.put(`${ApiUrl}/trail`, trail, {headers: this.getHeaders()});
  }
}
