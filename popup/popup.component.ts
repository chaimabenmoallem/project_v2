import { HttpClient } from '@angular/common/http';
import { Component,Inject, OnInit, Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TuningService } from 'src/app/services/tuning.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  
  
  selectedKey: string = 'energy'; 
  selectedValue: string = ''; 
  selectedSynonym: string = '';

  secondDropdownOptions: string[] = [];
  displayedTerms: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tuningService : TuningService) {}
    
   

    ngOnInit() {
      this.fetchRelatedOptions(this.selectedKey);
      this.tuningService.getAllTerms().subscribe(data => {
        this.displayedTerms = Object.entries(data).map(([term, details]: [string, any]) => ({
            term: term,
            fuzziness: details.fuzziness,
            occurrences: details.occurrences,
            checked: false
        }));
    });
    
    }
  
  // When a checkbox is clicked, update the selectedSynonym variable
  logTerm(term: any) {
    if (term.checked) {
      this.selectedSynonym = term.term;
    } else {
      this.selectedSynonym = '';
    }
  }

  onFirstDropdownChange(event: any) {
    this.selectedKey = event.target.value;
    this.fetchRelatedOptions(this.selectedKey);
  }

  // Update selectedValue when the second dropdown value changes
  onSecondDropdownChange(event: any) {
    this.selectedValue = event.target.value;
  }

  //   onFirstDropdownChange(event: any) {
  //     const selectedType = event.target.value;
  //     this.fetchRelatedOptions(selectedType);
  // }

  fetchRelatedOptions(value: string): void {
      this.tuningService.getRelatedOptions(value).subscribe({
          next: (options) => {
              this.secondDropdownOptions = options;
          },
          error: (error) => {
              console.error("Error fetching options:", error);
          }
      });
  }


  onConfirm(): void {
    console.log('Button clicked!');
  
    // Directly call the service without any condition
    this.tuningService.updateDictionaryWithSynonym(this.selectedKey, this.selectedValue, this.selectedSynonym)
      .subscribe({
        next: (response) => {
        console.log('Service response:', response);
      },
      error: (error) => {
        console.log('Service error:', error);
      }
    });
    this.dialogRef.close();

    
    // const checkedTerms = this.data.relatedTerms.filter((term:any) => term.checked);
    // console.log(this.displayedTerms);
    // console.log('Checked terms:', checkedTerms);
    // this.tuningService.saveToElasticsearch(checkedTerms).subscribe({

    //       next: (response:Object) => {
    //         console.log('Data saved successfully', response);
    //       },
    //       error: (error: any) => {
    //         console.error('Error saving data:', error);
    //       }
    //   });
}



 
// onConfirm(): void {
//   const checkedData = this.data.relatedTerms.filter((term:any) => term.checked);
//   this.saveToElasticsearch(checkedData);
// }

// saveToElasticsearch(data: any): void {
//   const url = 'http://localhost:8080/fuzzy';
  
//   this.http.post<Object>(url, data).subscribe({
//     next: (response:Object) => {
//       console.log('Data saved successfully', response);
//     },
//     error: (error: any) => {
//       console.error('Error saving data:', error);
//     }
// });
// }
}
