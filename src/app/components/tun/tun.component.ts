import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { TuningService } from 'src/app/services/tuning.service';

@Component({
  selector: 'app-tun',
  templateUrl: './tun.component.html',
  styleUrls: ['./tun.component.css'],
 
})
export class TunComponent implements OnInit{

  
 tuningData: { terms: string; occurrences: number }[] = [];
 
  
  
  constructor(private matDialog:MatDialog,private tuningServices : TuningService){}
  
  ngOnInit(): void {
    this.fetchTuningData();
   // this.submitData();
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

  /*clickDelete(item: any) {
    const index = this.tuningData.indexOf(item);
    this.tuningServices.deleteData(item.id).subscribe(() => {
      this.tuningData.splice(index, 1);
    });
  }*/
  fetchTuningData() {
    this.tuningServices.getTuningData().subscribe((data) => {
      this.tuningData = data;
    });
  }
 /* submitData(){
    this.tuningServices.getTuningData(this.tuningData).subscribe((data)=>{
      console.log(data);
     this.tuningData=data;
    });
  }*/
  
}

