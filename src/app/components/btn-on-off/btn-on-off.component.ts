import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-btn-on-off',
  templateUrl: './btn-on-off.component.html',
  styleUrls: ['./btn-on-off.component.css']
})
export class BtnOnOffComponent implements OnInit {

  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  toggleSpaces(): void {
    console.log("Button clicked!");
    const currentRemoveSpaces = this.wordService.getRemoveSpaces();
    this.wordService.setRemoveSpaces(!currentRemoveSpaces);
  }
}
