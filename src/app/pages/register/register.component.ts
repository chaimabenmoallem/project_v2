import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
 
  constructor(private route: Router){
 
  }
  ngOnInit(): void {
    
  }
  

  goToLogin(){
    if(this.registerObj.name=="chaima" && this.registerObj.email=="chaima@gmail.com" && this.registerObj.password=="chaima" && this.registerObj.confirmPassword=="chaima")
    {this.route.navigate(['login'])}
  }
}
