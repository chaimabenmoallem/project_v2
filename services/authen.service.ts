import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor() { }

  IsLoggedIn()
  {
    return localStorage.getItem("email")!=null;
  }
}
