import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {



  id:any;
  userdata:any=[];
  userinfo:any=[];
  edituser:any=[];
  edit:any=[];


  constructor(public userservice:UserService, private router:Router) {

   }
  ngOnInit(): void {

    this.id=this.userservice.getuserId();
    console.log(this.id);
    this.userdata=this.userservice.display(this.id).subscribe((res)=>{
      // with display method returns success,msg,data

      console.log(res);
      this.userdata=res;
      this.userinfo=this.userdata.data;
      console.log(this.userinfo);
  })
}


  OnSubmit(f:NgForm){

     console.log(f.value);
     this.userservice.updateuser(f.value).subscribe((res)=>{
      console.log(res);
      this.edituser=res;
      this.edit=this.edituser.data;
      console.log(this.edit);

      alert('Profile Edited sucessfully');

  },(err)=>{
    console.log(err);
    alert(' Error in updating profile')
  })

}

back(){
  this.router.navigateByUrl('/userprofile');
}
}
