import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermData } from 'src/app/components/tun/tuninterface'; 

@Injectable({
  providedIn: 'root'
})
export class TuningService {

  baseUrl="http://localhost:8080";
  constructor(private http : HttpClient) { }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/tuning/${id}`);
  }
  
//   getTermsByFuzziness(fuzziness: number): Observable<string[]> {
//     return this.http.get<string[]>(`${this.baseUrl}/fuzzy/fetch-terms-by-fuzziness?fuzziness=${fuzziness}`);
// }

getGroupedTermsByFuzziness(fuzziness: number): Observable<TermData[]> {
  return this.http.get<TermData[]>(`${this.baseUrl}/fuzzy/grouped-terms-by-fuzziness/${fuzziness}`);
}




getRepresentativeTermByFuzziness(fuzziness: number): Observable<TermData[]> {
  return this.http.get<TermData[]>(`${this.baseUrl}/fuzzy/representativeTerm/${fuzziness}`);
}
getAllTerms(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fuzzy/all-terms`);
}


// getRepresentativeTermByFuzziness(fuzziness: number, whitespaceRemovalActivated: boolean): Observable<any> {
//   return this.http.get(`${this.baseUrl}/fuzzy/representativeTerm/${fuzziness}?whitespaceRemovalActivated=${whitespaceRemovalActivated}`);
// }

/* DropDown Service*/
getRelatedOptions(selectedOption: string): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/drop/api/related-options?type=${selectedOption}`);
}

/* synonym*/

updateDictionaryWithSynonym(key: string, value: string, synonym: string): Observable<any> {
  console.log('Service method called with:', key, value, synonym);
  const body = {
    key: key,
    value: value,
    synonym: synonym
  };
  return this.http.post(`${this.baseUrl}/api/update-dictionary`, body);
}

/*
toggleMergeWhitespace(): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/fuzzy/toggle-merge-whitespace`, {});
}*/


// saveToElasticsearch(data: any[]): Observable<any> {
//   const url = `${this.baseUrl}/fuzzy/es`;
//   return this.http.post(url, data);
// }




 // searchWithFuzziness(term: string, fuzziness: number): Observable<number> {
 //   return this.http.post<number>(this.baseUrl + "/search", { term, fuzziness });
// }

//   getTuningsWithFuzziness(terms: string, fuzziness: number): Observable<Tuning[]> {
//     const url = `${this.baseUrl}?brand=${terms}&fuzziness=${fuzziness}`;
//     return this.http.get<Tuning[]>(url);
// }


  // getTuningData(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/tuning`);
  // }
  

 /* deleteData(id: String): Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/tuning"+id);
  }
  getTuningData(data: any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/tuning",data)
  }*/
}
