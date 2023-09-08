import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dataset } from 'src/app/pages/dashboard/ChartData'
import { ChartData } from 'src/app/pages/dashboard/ChartData'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl="http://localhost:8080";
  constructor(private http : HttpClient) { }

  getChartData(): Observable<ChartData> {
    return this.http.get<ChartData>(`${this.baseUrl}/dashboard`);
}

//   getChartData(): Observable<ChartData> {
//     return this.http.get(`${this.baseUrl}/dashboard`);
//   }
  
//   getChartData(): Observable<ChartData> {
//     return this.http.get<ChartData>('http://localhost:8080/chartdata');
// }

 
//   getChartData(id: string): Observable<ChartData> {
//     return this.http.get<ChartData>(`${this.baseUrl}/dashboard/${id}`);
// }

// getDoughnutsData(id: string): Observable<ChartData> {
//   return this.http.get<ChartData>(`${this.baseUrl}/dashboard1/${id}`);
// }

// getLineChartData(id: string): Observable<ChartData> {
//   return this.http.get<ChartData>(`${this.baseUrl}/dashboard2/${id}`);
// }
//   getAllChartData(): Observable<ChartData[]> {
//     return this.http.get<ChartData[]>(`${this.baseUrl}/dashboard`);
// }


}
