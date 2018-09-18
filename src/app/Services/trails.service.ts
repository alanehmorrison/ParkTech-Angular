import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://parksandtech.azurewebsites.net/'

@Injectable()
export class TrailsService {

  constructor(private _http: HttpClient) { }

  getTrails(){
    return this._http.get(`${ApiUrl}/Trails`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
