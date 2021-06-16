import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
//import { EditprofileComponent } from '../editprofile/editprofile.component';
//import { AddcredentialsComponent } from '../addcredentials/addcredentials.component';
//import{AddQuestionComponent} from '../add-question/add-question.component';
import { MatDialog } from '@angular/material/dialog';
//import{EditCredentialsComponent} from '../edit-credentials/edit-credentials.component'
import { FormGroup, NgForm } from '@angular/forms';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

imageform!:FormGroup;


  constructor(public userservice:UserService,
    public router:Router,
    private dialog:MatDialog,
    public fb:FormBuilder) {
      this.imageform = this.fb.group({
        userid:[this.userservice.getuserId()],
        image:[null]

      })

    }

  id:any;

  successalert:boolean=false;
  failalert:boolean=false;

  userdata:any
  userinfo:any=[]

  quesresponse:any;
  que:any=[];
  datafile:any

  answerresponse:any=[];
  ans:any=[];
  localUrl:any
  successMessage: any;

  answerresponse1:any=[];
  ans1:any=[]

  credentialdata:any=[];
  cred:any=[];

  imagedata:any=[];

  proimage1:any=[];

  ngOnInit(): void {


//userinformation
    this.id=this.userservice.getuserId();// get userid and sent with api to get user info
    console.log(this.id);//get user id in normal form

     this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
     this.userdata=res;
   //  console.log(res);
     this.userinfo=this.userdata.data;

   //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
   setTimeout(() => {
    this.successMessage = null;
    this.router.navigate(['userprofile']);
  }, 2000);

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



// display user image
// this.userservice.displayuserimage(this.id).subscribe((res)=>{
//   console.log(this.id);
//   this.imagedata=res;
//   this.proimage1=this.imagedata.data[0];
//   console.log(this.proimage1);

// }
// ,(err)=>{
//   console.log(err);

// }
// )



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

//for submitting answers
postans(f:NgForm){
  console.log(f.value);


  //for adding the answer by the user

 this.userservice.addanswer(f.value).subscribe((res)=>{
   this.answerresponse1=res;
   console.log(res);
   this.ans1=this.answerresponse1.data;
  //  location.reload();
  this.successalert= true;
 }
 ,(err)=>{
  this.failalert= true;
 })
}


onadd(){

  console.log(this.imageform.value);

  this.userservice.userimage(this.imageform.value.userid, this.imageform.value.image).subscribe((res)=>{
  console.log(res);

  }
  ,(err)=>{
    console.log(err);
    this.failalert= true;

  })



  }

//bootstrap alert for success
successclosealert(){
  this.successalert=false;
  location.reload();
}

 //bootstrap alert for failure
failclosealert(){
  this.failalert=false;

}


// submit image data through form

showPreviewImage(event: any) {

  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
        this.localUrl = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
const datafile=event.target.files[0];
console.log(datafile);
this.imageform.patchValue({
image:datafile
});

}
}

}
