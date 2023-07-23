import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { TuningService } from 'src/app/services/tuning.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-tun',
  templateUrl: './tun.component.html',
  styleUrls: ['./tun.component.css'],
 
})
export class TunComponent implements OnInit{

  
 tuningData: { terms: string; occurrences: number }[] = [];
 //isSingleWord: boolean = false;
  
  
  constructor(private matDialog:MatDialog,
              private tuningServices : TuningService,
              private wordService : WordService,
             ){}
  
  ngOnInit(): void {
    this.fetchTuningData();
   // this.submitData();
  }

  transformWord(word: string): string {
    const removeSpaces = this.wordService.getRemoveSpaces();
    return removeSpaces ? word.replace(/\s+/g, '') : word;
  }

  


  openDialog(){
   
    this.matDialog.open(PopupComponent,
    {width:'350px'})

  }
  clickDelete(item: any) {

    this.tuningServices.deleteData(item.id).subscribe(() => {
      this.fetchTuningData();
    });
  }
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

  fetchTuningData() {
    this.tuningServices.getTuningData().subscribe((data) => {
      // Log the entire data object to the console
      console.log("Data from API:", data);
      if (Array.isArray(data.content)) {
        this.tuningData = data.content;
      } else {
        console.error("Invalid data format received from the service");
      }
    });
  }
  
  
  
 /* submitData(){
    this.tuningServices.getTuningData(this.tuningData).subscribe((data)=>{
      console.log(data);
     this.tuningData=data;
    });
  }*/
  
}

