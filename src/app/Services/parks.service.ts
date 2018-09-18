import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://parksandtech.azurewebsites.net/'

@Injectable()
export class ParksService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get(`${ApiUrl}/parks`, {headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
