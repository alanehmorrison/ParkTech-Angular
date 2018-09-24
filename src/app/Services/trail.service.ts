import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trail } from '../Shared/Models/Trail';

const ApiUrl = 'https://parksandtech.azurewebsites.net/api'

@Injectable()
export class TrailService {

  constructor(private _http: HttpClient) { }

  getAllTrails(){
    return this._http.get(`${ApiUrl}/trail`, {headers: this.getHeaders() });
  }

  getTrailByID(id: string){
    return this._http.get(`${ApiUrl}/trail/${id}`, { headers: this.getHeaders() });
  }

  createTrail(trail: Trail){
    return this._http.post(`${ApiUrl}/trail`, trail, {headers: this.getHeaders()});
  }

  deleteTrail(id:number){
    return this._http.delete(`${ApiUrl}/trail/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  updateTrail(trail: Trail){
    return this._http.put(`${ApiUrl}/trail`, trail, {headers: this.getHeaders()});
  }
}
