import { Component, OnInit } from '@angular/core';

//simport { MatDialog } from '@angular/material/dialog';
//import { AddQuestionComponent} from '../add-question/add-question.component';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

   constructor(public userservice:UserService, public router:Router) { }
  id:any;
  quesresponse:any=[];
  que:any=[]

  userdata:any=[];
  userinfo:any=[];

  ngOnInit(): void {

  //   this.id=this.userservice.getuserId();// get userid and sent with api to get user info
  //   console.log(this.id);//get user id in normal form

  //    this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
  //    this.userdata=res;
  //  //  console.log(res);
  //    this.userinfo=this.userdata.data;
  //  //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
  // })

  // this.userservice.displayQPost(this.userservice.getuserId()).subscribe((res)=>{
  //   this.quesresponse=res;
  //   console.log(res);
  //   this.que=this.quesresponse.data;

  // },
  // (err)=>{
  //   console.log(err);
  // })

  this.userservice.getAllQuestions().subscribe((res)=>{
    this.quesresponse=res;
    this.que=this.quesresponse.data;
  },
  (err)=>{
       console.log(err);
     })

  }
  openDialogue(){
   // const dialogref = this.dialog.open(AddQuestionComponent)
  this.router.navigateByUrl('/addQuestion');
  }

  // askque(){
  //   this.router.navigateByUrl('/addQuestion');
  // }
  ansQue(){
    this.router.navigateByUrl('/answers');
  }




}
