import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LineComponent } from 'src/app/components/line/line.component';
import { BarComponent } from 'src/app/components/bar/bar.component';
import { DoughnutsComponent } from 'src/app/components/doughnuts/doughnuts.component';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';



@NgModule({
  declarations: [
    DashboardComponent,
    LineComponent,
    BarComponent,
    DoughnutsComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarComponentModule
  ]
})
export class DashboardModule { }
