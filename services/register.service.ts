import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  
  registerUser(registerObj:any) : Observable<any>
  {
    return this.httpClient.post<any>(this.baseUrl+"/register", registerObj)
  }
}
