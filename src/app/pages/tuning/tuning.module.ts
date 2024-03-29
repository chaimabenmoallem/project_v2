import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuningRoutingModule } from './tuning-routing.module';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';
import { TunComponent } from 'src/app/components/tun/tun.component';
import { TuningComponent } from './tuning.component';
import { BtnOnOffComponent } from 'src/app/components/btn-on-off/btn-on-off.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    // other imports
   
  ],
  // other module declarations
})
export class TunModule { }


@NgModule({
  declarations: [
    TuningComponent,
    TunComponent,
    BtnOnOffComponent,
    SliderComponent,
    PopupComponent
    

  ],
  imports: [
    CommonModule,
    TuningRoutingModule,
    NavbarComponentModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule
    
    
  ]
})
export class TuningModule { }
