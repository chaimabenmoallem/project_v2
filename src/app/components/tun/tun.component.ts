import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tun',
  templateUrl: './tun.component.html',
  styleUrls: ['./tun.component.css'],
 
})
export class TunComponent {
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(PopupComponent,
    {width:'350px'})

  }
clickDelete() {
  if(confirm("Are you sure to delete ")) {
    console.log("Implement delete functionality here");
  }
  
}

}
