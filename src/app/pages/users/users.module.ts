import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';







@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarComponentModule
  ]
})
export class UsersModule { }
