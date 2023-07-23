import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TuningService {

  baseUrl="http://localhost:8080";
  constructor(private http : HttpClient) { }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/tuning/${id}`);
  }

  getTuningData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tuning`);
  }

 /* deleteData(id: String): Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/tuning"+id);
  }
  getTuningData(data: any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/tuning",data)
  }*/
}
