import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public userservice:UserService,public router:Router) { }

  ngOnInit(): void {

    this.userservice.deleteToken();

    this.userservice.deleteuserId();

     this.router.navigateByUrl('/login');

     console.log("token deleted successfully");

  }

}
