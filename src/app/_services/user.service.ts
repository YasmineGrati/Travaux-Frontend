import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8082/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  technicien: User = new User();
  constructor(private http: HttpClient) { }

  addTech(data:any)  {
    return this.http.post(API_URL+'add-user',data);
  }
  public getUsers() : Observable<any> {
    console.log("test call");
    return this.http.get<any>(API_URL+'get-all-users');
}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getTechnicienBoard(): Observable<any> {
    return this.http.get(API_URL + 'tech', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}