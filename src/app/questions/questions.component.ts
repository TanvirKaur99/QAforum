import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private router:Router,
    public userSer:UserService) { }

  ngOnInit(): void {
     console.log(this.userSer.getToken()); //to check token stored or not
  }
  openDialogue(){
    this.router.navigateByUrl('/addQuestion')
  }

}
