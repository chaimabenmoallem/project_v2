import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TuningService } from 'src/app/services/tuning.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  
})
export class SliderComponent implements OnInit {

  tunings: any[] = [];
  form: FormGroup = new FormGroup({});
  @Output() fuzzinessChanged = new EventEmitter<number>();

 // @Output() showTableEvent = new EventEmitter<void>();

  constructor(private tuningService: TuningService,
              private fb: FormBuilder ) {}


  ngOnInit() {
  this.form = this.fb.group({
  sliderName: [0]  // initial value
    });
  }


//change the value of slider 
onChange(event: any) {
  this.fuzzinessChanged.emit(Number(event.target.value));
}




// showTable() {
//  // Emit event to parent component
//  this.showTableEvent.emit();  
//  } 

}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['maxDateValue'] && changes['maxDateValue'].currentValue) {
  //       this.maxSliderValue = changes['maxDateValue'].currentValue.getTime();
  //   }
  // }



//  sliderValue: number = 1; // default value
//  filteredTerms: any[] = [];

//  filterTerms() {
//   const fuzzinessValue = this.form.get('sliderName')?.value;
//   // Do something with fuzzinessValue, e.g., fetch terms from the backend
//   this.tuningService.getTermsByFuzziness(fuzzinessValue).subscribe(terms => {
//       this.filteredTerms = terms;
//   });
// }

// @Output() fuzzinessChanged = new EventEmitter<number>();

// onSliderChange(value: number) {
//     this.fuzzinessChanged.emit(value);
// }




//  filterTerms(): void {
//   const selectedFuzziness = this.form.get('sliderName')?.value;

//   this.tuningService.getTermsByFuzziness(selectedFuzziness).subscribe({
//     next: terms => {
//       console.log("term fetched");
//       this.filteredTerms = terms;
//     },
//     error: err => {
//       console.error('Failed to fetch terms:', err);
//       // Handle errors gracefully, e.g., show a user-friendly message
//     }
//   });
// }