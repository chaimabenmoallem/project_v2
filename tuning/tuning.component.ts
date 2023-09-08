import { Component, OnInit } from '@angular/core';
import { TermData } from 'src/app/components/tun/tuninterface';
import { TuningService } from 'src/app/services/tuning.service';

@Component({
    selector: 'app-tuning',
    templateUrl: './tuning.component.html',
    styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {
    highestOccurrenceTerm!: TermData;
    // State of the toggle button. Assume false = OFF, true = ON.
    toggleState: boolean = false;
    originalData: TermData[] = [];
    //  displayedTerms: string[] = [];

    // termsWithSpaces: any[] = [];
    // termsWithoutSpaces: any[] = [];
    showInitialTable = false;
    tuningData: any[] = [];
    displayedTerms: any[] = [...this.tuningData];
    // relatedTermsMap: Map<string, any[]> = new Map();

    // whitespaceRemovalActivated: boolean = false;
    currentFuzzinessValue: number = 0;
    constructor(private tuningService: TuningService) { }

    ngOnInit(): void {
        this.tuningService.getAllTerms().subscribe(terms => {
            this.highestOccurrenceTerm = terms.sort((a: TermData, b: TermData) => b.occurrences - a.occurrences)[0];
            // });

            //this.tuningService.getAllTerms().subscribe(data => {
            // Initialize termsWithSpaces and termsWithoutSpaces
            // this.termsWithSpaces = [];
            // this.termsWithoutSpaces = [];

            // // Process each item
            // data.forEach((item: any) => {
            //     if (item.term.includes(' ')) {
            //         this.termsWithSpaces.push(item);
            //     } else {
            //         this.termsWithoutSpaces.push(item);
            //     }
            // });

            // Set the tuningData and displayedTerms
            this.tuningData = terms.map((item: any) => ({
                term: item.term,
                fuzziness: item.fuzziness,
                occurrences: item.occurrences
            }));
            this.originalData = [...this.tuningData];
            this.displayedTerms = [...this.tuningData];
        });
    }
    // onWhitespaceButtonClick() {
    //     this.whitespaceRemovalActivated = !this.whitespaceRemovalActivated;
    //     console.log("Whitespace removal is:", this.whitespaceRemovalActivated);
    //     this.fetchAndSetDisplayedTerms(this.currentFuzzinessValue, this.whitespaceRemovalActivated);
    // }


    // handleWhitespaceToggle(whitespaceRemovalActivated: boolean) {
    //     this.fetchAndSetDisplayedTerms(this.currentFuzzinessValue, whitespaceRemovalActivated);
    //   }

    // processTermsBasedOnFuzziness(fuzzinessValue: number) {
    //     // Terms without spaces
    //     let maxTermWithoutSpace = this.termsWithoutSpaces.reduce((max, term) => term.occurrences > max.occurrences ? term : max, { occurrences: 0 });
    //     let totalOccurrencesWithoutSpace = this.termsWithoutSpaces.reduce((total, term) => total + term.occurrences, 0);

    //     // Terms with spaces
    //     let maxTermWithSpace = this.termsWithSpaces.reduce((max, term) => term.occurrences > max.occurrences ? term : max, { occurrences: 0 });
    //     let totalOccurrencesWithSpace = this.termsWithSpaces.reduce((total, term) => total + term.occurrences, 0);

    //     this.displayedTerms = [
    //         { term: maxTermWithoutSpace.term, occurrences: totalOccurrencesWithoutSpace },
    //         { term: maxTermWithSpace.term, occurrences: totalOccurrencesWithSpace }
    //     ];
    // }

    handleToggleChange(toggleState: boolean) {
        this.toggleState = toggleState; // Set the current toggle state based on the button
        this.updateTableData();
    }


    updateTableData(): void {
        console.log('Updating table data based on toggle state:', this.toggleState);

        if (this.toggleState) {
            let aggregatedData: { [key: string]: TermData } = {};

            this.originalData.forEach(term => {
                let cleanTerm = term.term.replace(/\s+/g, '');  // Remove all whitespaces

                if (aggregatedData[cleanTerm]) {
                    aggregatedData[cleanTerm].occurrences += term.occurrences;
                    aggregatedData[cleanTerm].relatedTerms = [
                        ...new Set([...aggregatedData[cleanTerm].relatedTerms, ...term.relatedTerms])
                    ];
                } else {
                    aggregatedData[cleanTerm] = {
                        ...term,
                        term: cleanTerm,
                        relatedTerms: [...term.relatedTerms]
                    };
                }
            });

            this.displayedTerms = Object.values(aggregatedData);

        } else {
            // Logic for when toggle is OFF
            this.displayedTerms = [...this.originalData];
        }
    }



   onFuzzinessChanged(fuzzinessValue: number): void {
    console.log("Fuzziness value received:", fuzzinessValue);

    if (fuzzinessValue === 0) {
        this.originalData = [...this.tuningData];
        this.showInitialTable = true;
    } else {
        this.showInitialTable = false;
        this.tuningService.getGroupedTermsByFuzziness(fuzzinessValue).subscribe({
            next: (terms) => {
                this.originalData = [...terms]; // Save the original data
                this.updateTableData(); // Adjust displayedTerms based on the toggleState
            },
            error: (error) => {
                console.error('Error fetching terms:', error);
            }
        });
    }
}






    // fetchAndSetDisplayedTerms(fuzzinessValue: number, whitespaceRemovalActivated: boolean): void {
    //     this.tuningService.getRepresentativeTermByFuzziness(fuzzinessValue, whitespaceRemovalActivated)
    //     .subscribe(data => {
    //         if (!data || data.length === 0) {
    //             this.displayedTerms = [];
    //             this.termsWithSpaces = [];
    //             this.termsWithoutSpaces = [];
    //         } else {
    //             // Separate the terms based on spaces
    //             this.termsWithSpaces = data.filter((termObj: any) => termObj.term && termObj.term.includes(' '));
    //             this.termsWithoutSpaces = data.filter((termObj: any) => termObj.term && !termObj.term.includes(' '));

    //             // Combine the terms for displaying such that terms with spaces appear at the end
    //             this.displayedTerms = [...this.termsWithoutSpaces, ...this.termsWithSpaces];
    //         }
    //     });
    // }








    // onFuzzinessChanged(fuzzinessValue: number): void {
    //     console.log("Fuzziness value received:", fuzzinessValue);

    //     if (fuzzinessValue === 0) {
    //         this.displayedTerms = [...this.tuningData]; 

    //         console.log("Displayed terms after reset:", this.displayedTerms.length, this.displayedTerms);

    //         this.showInitialTable = true;

    //         console.log('showInitialTable is now:', this.showInitialTable);
    //     } else {
    //         this.showInitialTable = false; 
    //         this.displayedTerms = this.tuningData.filter(term => {
    //             return term.fuzziness === fuzzinessValue;
    //         });
    //       const totalOccurrences = this.calculateSumByFuzziness(fuzzinessValue);

    //        // Add a new object to displayedTerms for showing the sum
    //         this.displayedTerms.push({
    //             term: `Total Occurrences for Fuzziness ${fuzzinessValue}`,
    //            occurrences: totalOccurrences,
    //             fuzziness: fuzzinessValue
    //         });

    //         console.log("Filtered terms:", this.displayedTerms);
    //     }
    //     console.log("Displayed terms:", this.displayedTerms);
    //     this.sumOfOccurrences = this.calculateSumByFuzziness(fuzzinessValue);
    // }  



    // tuningData: any[] = [];
    // displayedTerms: any[] = [];

    // filterTermsByFuzziness(fuzzinessValue: number): void {
    //     if (fuzzinessValue === 0) {
    //         this.displayedTerms = [...this.tuningData];
    //     } else {
    //         this.displayedTerms = this.tuningData.filter(term => term.fuzziness === fuzzinessValue);
    //     }
    // }

    // onFuzzinessChanged(value: number): void {
    //     this.filterTermsByFuzziness(value);
    // }


    //   displayTotalOccurrences() {
    //       this.showInitialTable = false;
    //       this.showTotalOccurrences = true;
    //       this.tuningService.searchWithFuzziness('Range Rover', 1).subscribe(total => {
    //           this.totalOccurrences = total;
    //       });
    //   }

}
