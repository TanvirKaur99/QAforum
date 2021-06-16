import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(public userservice:UserService, private router:Router) { }

  ngOnInit(): void {


  }
  sendemail(f:NgForm){
    console.log(f.value);
 this.userservice.forgetpassword(f.value).subscribe((res)=>{
    console.log(res);
    alert("Please check your email to reset password")
  })

  }

}
