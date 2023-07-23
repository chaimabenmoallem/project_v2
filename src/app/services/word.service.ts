import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  
  private removeSpaces: boolean = false;

  constructor() { }

  getRemoveSpaces(): boolean {
    return this.removeSpaces;
  }

  setRemoveSpaces(value: boolean): void {
    this.removeSpaces = value;
  }
}
