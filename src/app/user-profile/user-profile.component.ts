import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
//import { EditprofileComponent } from '../editprofile/editprofile.component';
//import { AddcredentialsComponent } from '../addcredentials/addcredentials.component';
//import{AddQuestionComponent} from '../add-question/add-question.component';
import { MatDialog } from '@angular/material/dialog';
//import{EditCredentialsComponent} from '../edit-credentials/edit-credentials.component'
import { NgForm } from '@angular/forms';

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


  answerresponse1:any=[];
  ans1:any=[]

  credentialdata:any=[];
  cred:any=[];

  imagedata:any=[];
  image:any=[];

  ngOnInit(): void {

    this.id=this.userservice.getuserId();// get userid and sent with api to get user info
    console.log(this.id);//get user id in normal form

     this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
     this.userdata=res;
   //  console.log(res);
     this.userinfo=this.userdata.data;
   //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
  })


  //for displaying Questions by the user
  this.userservice.displayQPost(this.userservice.getuserId()).subscribe((res)=>{
    this.quesresponse=res;
    console.log(res);
    this.que=this.quesresponse.data;

  },
  (err)=>{
    console.log(err);
  })


  //for displaying Answers by the user
  this.userservice.dispUserAns(this.userservice.getuserId()).subscribe((res)=>{
    this.answerresponse=res;
    console.log(res);
    this.ans=this.answerresponse.data;

  },
  (err)=>{
    console.log(err);
  })




  //for displaying the credentials by the user
  this.userservice.displaycredentials(this.userservice.getuserId()).subscribe((res)=>{
         this.credentialdata=res;
         console.log(res);
         this.cred=this.credentialdata.data;

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
    if(this.cred.length==0){
       this.router.navigateByUrl('/addCredentials')
// const dialogRef= this.dialog.open(AddcredentialsComponent,{
//         height: '800px',
//         width: '800px'});
      }
      else{
        alert("credentials already added");
      }

  }

 editprofile(){
 // this.dialog.open();
 this.router.navigateByUrl('/editprofile')
// const dialogRef= this.dialog.open(EditprofileComponent,{
//   height: '800px',
//   width: '800px'});

}

giveans()
{
  this.router.navigateByUrl('/answers')
}
editcred()
{
  this.router.navigateByUrl('/editcredentials')
  // const dialogRef= this.dialog.open(EditCredentialsComponent,{
  //   height: '800px',
  //   width: '800px'});
}


close(){
  this.router.navigateByUrl('');
}

postans(f:NgForm){
  console.log(f.value);


  //for adding the answer by the user

 this.userservice.addanswer(f.value).subscribe((res)=>{
   this.answerresponse1=res;
   console.log(res);
   this.ans1=this.answerresponse1.data;
  //  location.reload();
   alert("answer added successfully");
 }
 ,(err)=>{
   console.log(err);
 })
}


onadd(f:NgForm){
  console.log(f.value);
  this.userservice.userimage(f.value).subscribe((res)=>{

    // console.log(res);
    this.imagedata=res;
    this.image=this.imagedata.data;
    // console.log(this.image);
    alert('profile picture added successfully');
  },(err)=>{
    console.log(err);
  }
  )
 }
}
