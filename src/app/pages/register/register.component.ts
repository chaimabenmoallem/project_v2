import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerObj:any={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  }
  
 
  constructor(private route: Router , private registerServices :RegisterService ){
 
  }
  ngOnInit(): void {
    
  }
  

  goToLogin(){
    
    this.registerServices.registerUser(this.registerObj).subscribe({
      next: (response: any) => {
        console.log(response);
      // Registration success, navigate to login page
      this.route.navigate(["/login"]);
    },
    error: (error: any) => {
      console.error('An error occurred:', error);
    }
  });
  
}}
