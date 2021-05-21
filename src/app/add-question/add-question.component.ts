import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {



  constructor(public userservice:UserService,
    public router:Router,
    private dialog:MatDialog) { }


    id:any;
    userdata:any=[];
    userinfo:any=[];


  ngOnInit(): void {

    this.id=this.userservice.getuserId();   //get userid and sent with api to get userinfo
      console.log(this.id);   //gives id of user in normal form
    this.userdata=this.userservice.display(this.id).subscribe((res)=>{  //with display method returns success,msg,data
      this.userdata=res;
      this.userinfo=this.userdata.data;
       console.log(this.userinfo);   //give userinfo on console without success and msg in backend format.
    })

  }
  onadd(f:NgForm){
    this.userservice. addQuePost(f.value).subscribe((res)=>{
    console.log(res);
    alert('Question submitted successfully')
    this.dialog.closeAll();

    },(err)=>{
      console.log(err);
    }
    )
  }
  close(){
    this.router.navigateByUrl('/userprofile')
  }
  }


