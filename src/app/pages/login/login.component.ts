import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router : Router){}

  goToRegister(){
    this.router.navigate(["/register"])
  }

  goToDashboard(){
    if(this.loginObj.email=='chaima@gmail.com' && this.loginObj.password=='chaima')
    {this.router.navigate(["/dashboard"])}
  }
}
