import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{UserService} from '../shared/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {

  }
   //blank array
   userdata:any=[];


  logindata(f:NgForm)
  {
    console.log(f.value);
    this.userservice.login(f.value).subscribe((res)=>{
      //console.log(res);
     this.userdata=res;
     console.log(this.userdata.token);//returns token in normal form
     this.userservice.setToken(this.userdata.token);//store token in response
     this.userservice.setuserId(this.userdata.user._id);//store userid in response
     alert('Login successfully')
    this.router.navigateByUrl('/questions');
     //this.router.navigateByUrl('/userprofile');
   }
    ,(err)=>{
      console.log(err);
      this.userservice.setToken(this.userdata.token);
      alert('Error in Password or email')


    })
  }

}
