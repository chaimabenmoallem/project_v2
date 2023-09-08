import { Component, OnInit, Input } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { TuningService } from 'src/app/services/tuning.service';
import { WordService } from 'src/app/services/word.service';
import { TermData } from './tuninterface';

@Component({
  selector: 'app-tun',
  templateUrl: './tun.component.html',
  styleUrls: ['./tun.component.css'],
 
})
export class TunComponent implements OnInit{
  relatedTerms: any[] = [];
  
  tuningData: any[] = []; 
  @Input() termsWithSpaces: any[] = [];
  @Input() termsWithoutSpaces: any[] = [];
  
  @Input() showInitialTable: boolean = true;
  @Input() totalOccurrences: number | null = null;
  @Input() displayedTerms: any[] = [];
 

  constructor(private matDialog:MatDialog,
              private tuningService : TuningService,
              private wordService : WordService,
             ){}


  
ngOnInit(): void {
 //this.fetchTerm();
}
    


openDialog(term: TermData): void {
  this.tuningService.getGroupedTermsByFuzziness(term.fuzziness).subscribe(data => {
      const relevantData = data.find(t => t.term === term.term);
      if (relevantData) {
          this.relatedTerms = relevantData.relatedTerms.map(term => ({
              term: term,
              checked: false // Set initial value for 'checked'
          }));
      }

      // Open the dialog here...
      const dialogRef = this.matDialog.open(PopupComponent, {
          width: '350px',
          data: { relatedTerms: this.relatedTerms } // Pass the transformed data
      });

      dialogRef.afterClosed().subscribe(result => {
          // Handle modal close logic here if needed
      });
  });
}






  clickDelete(item: any) {     

    const index = this.tuningData.indexOf(item);
    if (index > -1) {
        this.tuningData.splice(index, 1);
      // Syncing with backend to delete the term
      this.tuningService.deleteData(item.id).subscribe({
        next: (response) => {
            console.log('Term deleted from backend successfully!', response);
        },
        error: (error) => {
            console.error('Error deleting term from backend:', error);
        },
        complete: () => {
            console.log('Delete operation completed!');
        }
      });
    }
  //         this.tuningServices.deleteData(item.id).subscribe(() => {
  //           //this.getTunings();
  //         });
   }

  
  //  transformWord(word: string): string {
  //   const removeSpaces = this.wordService.getRemoveSpaces();
  //   return removeSpaces ? word.replace(/\s+/g, '') : word;
  // }

//   getTunings(): void {
//     this.tuningServices.getTunings()
//       .subscribe((response: any) => {   // cast the response to 'any'
//         this.tuningData = response.content;
//       });
// }

  
//   fetchTerm(): void {
//     const termSubscription = this.searchService.getSearchTerm().subscribe({
//         next: response => {
//             console.log('Received response:', response);
//             const terms = response.split('\n');
//             terms.forEach(term => {
//                 const existingTerm = this.tuningData.find(item => item.terms === term);
//                 if (existingTerm) {
//                     // If term already exists in the array, increase its occurrences by 1
//                     existingTerm.occurrences++;
//                 } else {
                   
//                     const newTerm = {
//                         terms: term,
//                         occurrences: 0,  
//                         addedFromSearch: true
//                     };
//                     this.tuningData.unshift(newTerm);
//                 }
//             });
//             console.log('After addition or update:', this.tuningData);
//         },
//         error: error => {
//             console.error('Error fetching terms:', error);
//         },
//         complete: () => {
//             console.log('Term retrieval completed!');
//         }
//     });
// }
  
  

 
  // removeWhitespaces(terms: string): string {
  //   return terms.replace(/\s/g, '');
  // }

  /*clickDelete(item: any) {
    const index = this.tuningData.indexOf(item);
    this.tuningServices.deleteData(item.id).subscribe(() => {
      this.tuningData.splice(index, 1);
    });
  }*/
  // fetchTuningData() {
  //   this.tuningServices.getTuningData().subscribe((data) => {
  //     this.tuningData = data;
  //   });
  // }

  // fetchTuningData() {
  //   this.tuningServices.getTuningData().subscribe((data) => {
  //     // Log the entire data object to the console
  //     console.log("Data from API:", data);
  //     if (Array.isArray(data.content)) {
  //       this.tuningData = data.content;
  //     } else {
  //       console.error("Invalid data format received from the service");
  //     }
  //   });
  // }
  
  
  
 /* submitData(){
    this.tuningServices.getTuningData(this.tuningData).subscribe((data)=>{
      console.log(data);
     this.tuningData=data;
    });
  }*/
  
}

