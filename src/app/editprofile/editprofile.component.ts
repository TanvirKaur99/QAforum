import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {


  selected!:User;
  id:any;
  userdata:any=[];
  userinfo:any=[];
  edituser:any=[];
  edit:any=[];
  updateform!:NgForm;

  constructor(public userservice:UserService, private dialog:MatDialog) {

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
    // console.log(f.value);
    this.userservice.updateuser(f.value).subscribe((res)=>{
      console.log(res);
      this.edituser=res;
      this.edit=this.edituser.data;
      console.log(this.edit);
      this.dialog.closeAll();


    })
}

close(){
  this.dialog.closeAll();
}
}
