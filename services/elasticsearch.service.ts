import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
  // private ELASTICSEARCH_URL = 'https://83.202.224.116:9200';

  // constructor(private http: HttpClient) { }

  // async saveTerms(terms: any[]): Promise<any[]> {
  //   const indexUrl = `${this.ELASTICSEARCH_URL}/tuning/_doc`; 

  //   const savePromises = terms.map(async term => {
  //     const payload = {
  //       id: term.id, 
  //       term: term.term,
  //       occurrences: term.occurrences,
  //       fuzziness: term.fuzziness
  //     };
  //     return await firstValueFrom(this.http.post(indexUrl, payload));
  //   });

  //   return await Promise.all(savePromises);
  // }

  
}
