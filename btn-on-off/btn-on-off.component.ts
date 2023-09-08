import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-btn-on-off',
  templateUrl: './btn-on-off.component.html',
  styleUrls: ['./btn-on-off.component.css']
})
export class BtnOnOffComponent implements OnInit {

  @Output() toggleChanged = new EventEmitter<boolean>();
  isToggled: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  onToggleChanged() {
    this.isToggled = !this.isToggled;
    console.log('Toggle button state changed:', this.isToggled); // <-- This line
    this.toggleChanged.emit(this.isToggled);
  }
  
  
  
//   whitespaceRemovalActivated: boolean = false;
//   @Output() whitespaceToggled = new EventEmitter<boolean>();
  
//   // This property keeps track of the whitespace removal state.

//   constructor(private wordService: WordService) { }

//   toggleWhitespaceRemoval(): void {
//     console.log('Button clicked!');
//     this.whitespaceRemovalActivated = !this.whitespaceRemovalActivated;
//     console.log('Whitespace removal activated:', this.whitespaceRemovalActivated);

//     this.whitespaceToggled.emit(this.whitespaceRemovalActivated);
// }
//   ngOnInit() {
//   }
//   @Output() toggleSpacesEvent = new EventEmitter<boolean>();

// toggleSpaces(): void {
//     const currentRemoveSpaces = this.wordService.getRemoveSpaces();
//     this.wordService.setRemoveSpaces(!currentRemoveSpaces);
//     this.toggleSpacesEvent.emit(!currentRemoveSpaces);
// }


  
  


  // toggleSpaces(): void {
  //   console.log("Button clicked!");
  //   const currentRemoveSpaces = this.wordService.getRemoveSpaces();
  //   this.wordService.setRemoveSpaces(!currentRemoveSpaces);
  // }
}
