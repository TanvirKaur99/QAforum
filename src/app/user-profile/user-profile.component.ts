import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public userservice:UserService) { }

  id:any;
  userdata:any
  userinfo:any=[]

  ngOnInit(): void {

    this.id=this.userservice.getuserId();// get userid and sent with api to get user info
    console.log(this.id);//get user id in normal form

  this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
     this.userdata=res;
   //  console.log(res);
     this.userinfo=this.userdata.data;
   //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
  })

}
}
