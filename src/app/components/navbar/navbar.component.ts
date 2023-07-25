import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { TuningService } from 'src/app/services/tuning.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private router : Router,
              private authService : AuthenService, 
              ){


  }
 

  logout(){
    // this.authService.logout();
    // const confirmation = confirm('Do you want to logout');
    // if(confirmation){
    this.router.navigate(['/login'])
  }
  }
//}
