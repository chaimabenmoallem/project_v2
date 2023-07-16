import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = new Array<any>();
constructor(public userservices: UserServiceService){}

ngOnInit(): void {
  localStorage.setItem('token', Math.random().toString());
    this.userservices.getUsers().subscribe(response => {
    this.users = response.data;
});
}
}
