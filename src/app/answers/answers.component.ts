import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {


  constructor(public userservice:UserService,private router:Router) { }

  id:any;
  qid:any;

  userdata:any
  userinfo:any=[]

  quesresponse:any;
  que:any=[];

  ansresponse:any=[];
  ans:any=[];

  credentialdata:any=[];
  cred:any=[];


  ngOnInit(): void {

    this.id=this.userservice.getuserId();// get userid and sent with api to get user info
    console.log(this.id);//get user id in normal form

     // this.queid=this.userserviceobj.getquestionid();
    // console.log(this.queid);

  this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
  this.userdata=res;

  this.userinfo=this.userdata.data;
  console.log(this.userinfo);//give userinfo on console without success and msg in backend format



  this.userservice.getAllQuestions().subscribe((res)=>{
    this.id=this.userservice.getuserId();
    this.quesresponse=res;
    console.log(this.quesresponse)
    this.que=this.quesresponse.data;
    console.log(this.que)
  },
  (err)=>{
      console.log(err);
     })
  })


  this.userservice.displaycredentials(this.id).subscribe((res)=>{
    // console.log(res)
         this.credentialdata=res;
          console.log(this.credentialdata);
          this.cred=this.credentialdata.data;
          console.log(this.cred);
  }
  ,(err)=>{
    console.log(err);

  })




  }
  postans(f:NgForm){
    console.log(f.value);
   this.userservice.addanswer(f.value).subscribe((res)=>{
     this.ansresponse=res;
     console.log(res);
     this.ans=this.ansresponse.data;
     console.log(this.ans)
     alert("answer added successfully");
     this.router.navigateByUrl('/profile');

   }
   ,(err)=>{
     console.log(err);
   })
 }

 close(){
  this.router.navigateByUrl('/userprofile')
}

}
