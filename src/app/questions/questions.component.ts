import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddQuestionComponent } from '../add-question/add-question.component';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    public userservice: UserService,
    public router: Router,
    private dialog: MatDialog
  ) {}
  id: any;
  quesresponse: any = [];
  que: any = [];

  ansresponse: any = [];
  answ: any = [];
  catAnsw: any = [];

  answerresponse: any = [];
  ans: any = [];

  userdata: any = [];
  userinfo: any = [];

  credentialdata: any = [];
  cred: any = [];

  ngOnInit(): void {
    this.id = this.userservice.getuserId(); // get userid and sent with api to get user info
    console.log(this.id); //get user id in normal form

    //    this.userdata= this.userservice.display(this.id).subscribe((res)=>{//with display method returns success message and data
    //    this.userdata=res;
    //  //  console.log(res);
    //    this.userinfo=this.userdata.data;
    //  //  console.log(this.userinfo);//give userinfo on console without success and msg in backend format
    // })

    // this.userservice.getAllQuestions().subscribe((res)=>{
    //   this.quesresponse=res;
    //   this.que=this.quesresponse.data;
    // },
    // (err)=>{
    //      console.log(err);
    //    })

    this.userservice.displayallans().subscribe(
      (res) => {
        this.ansresponse = res;
        console.log(res);
        this.answ = this.ansresponse.data;
        this.catAnsw = this.answ;

        console.log(this.answ);

        alert(this.answ);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  postans(f: NgForm) {
    console.log(f.value);
    this.userservice.addanswer(f.value).subscribe(
      (res) => {
        this.answerresponse = res;
        console.log(res);
        this.ans = this.answerresponse.data;
        alert(' new answer added successfully');
        this.router.navigateByUrl('/profile');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openDialogue() {
    this.router.navigateByUrl('/addQuestion');
  }

  ansQue() {
    this.router.navigateByUrl('/answers');
  }

  askque() {
    this.router.navigateByUrl('/addQuestion');
  }
  getCategory(category: string) {
    this.catAnsw = [];
    if (category == 'Education') {
      this.answ.forEach((dt: any) => {
        dt.questionid.category == 'Education' ? this.catAnsw.push(dt) : '';
      });
    }
  }
}
