import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  constructor(private http:HttpClient) { }

  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get<any>(url);
}}
