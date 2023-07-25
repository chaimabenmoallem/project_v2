import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginObj:any={
    email :'',
    password : ''
  }



  ngOnInit(): void {
    
  }
  //Router is a service that provide navigation
  constructor(private router : Router , 
              private loginServices : LoginService,
              private authService: AuthenService){}


  visible:boolean = true;
  changetype:boolean=true;
  
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }





  goToRegister(){
    
    this.router.navigate(["/register"])
  }
  goToDashboard(email : any){
    localStorage.setItem("email",email);
    this.router.navigate([""]);
    
    this.loginServices.addUser(this.loginObj).subscribe({
      next: (response: any) => {
        console.log(response); // Authentication successful
        this.router.navigate(["/dashboard"])
      },
      error: (error: any) => {
        console.error('An error occurred:', error); // Authentication failed
        // Display an error message or perform any desired action
      }
    });
  
  }
}


