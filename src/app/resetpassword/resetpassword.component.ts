import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {


  hide = true;
  hide1= true;
  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }
  setpass(f:NgForm){

  }
}
