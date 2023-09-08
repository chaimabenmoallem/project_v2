import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  // getSearchTerm() {
  //   return this.http.get('http://localhost:8080/search/term', { responseType: 'text' });
  // }
}
