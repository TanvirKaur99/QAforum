import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';
//import { AddcredentialsComponent } from '../addcredentials/addcredentials.component';
//import{AddQuestionComponent} from '../add-question/add-question.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public userservice:UserService,
    public router:Router,
    private dialog:MatDialog) { }

  id:any;
  userdata:any
  userinfo:any=[]

  quesresponse:any;
  que:any=[];

  answerresponse:any=[];
  ans:any=[];

  credentialdata:any=[];
  cred:any=[];

  ngOnInit(): void {

    this.id=this.userservice.getuserId();// get userid and sent with api to get user info
    console.log(this.id);//get user id in normal form

     this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
     this.userdata=res;
   //  console.log(res);
     this.userinfo=this.userdata.data;
   //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
  })

  this.userservice.displayQPost(this.userservice.getuserId()).subscribe((res)=>{
    this.quesresponse=res;
    console.log(res);
    this.que=this.quesresponse.data;

  },
  (err)=>{
    console.log(err);
  })

  this.userservice.displaycredentials(this.userservice.getuserId()).subscribe((res)=>{
         this.credentialdata=res;
        console.log(res);
         this.cred=this.credentialdata.data;
         console.log(this.cred[0]);
     }
     ,(err)=>{
     console.log(err);

     }
     )

}

askque(){
 // this.dialog.open(AddQuestionComponent);
 this.router.navigateByUrl('/addQuestion');
  }

  addcred(){
    // const dialogRef= this.dialog.open(AddcredentialsComponent,{
    //   height: '800px',
    //   width: '800px'});
     this.router.navigateByUrl('/addCredentials')

  }
 logout(){
   console.log(this.userservice.getToken)
  this.router.navigateByUrl('/login');
 }
 editprofile(){
 // this.dialog.open(EditprofileComponent);
 this.router.navigateByUrl('/editprofile')

 }

}
