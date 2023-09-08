import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  
  private removeSpaces: boolean = false;

  constructor(private http : HttpClient) { }

  getRemoveSpaces(): boolean {
    return this.removeSpaces;
  }

  setRemoveSpaces(value: boolean): void {
    this.removeSpaces = value;
  }

}
