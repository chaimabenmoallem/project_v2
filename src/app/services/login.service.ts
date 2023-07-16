import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:8080";
  constructor(private http : HttpClient) { }
  //myheaders = new HttpHeaders().set('Content-Type','application/json');
  addUser(loginObj:any): Observable<any>
  {
    return this.http.post<any>(this.baseUrl+"/login",loginObj);//,{headers: this.myheaders}
  }
}
