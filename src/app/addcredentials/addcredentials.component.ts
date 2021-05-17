import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-addcredentials',
  templateUrl: './addcredentials.component.html',
  styleUrls: ['./addcredentials.component.css']
})
export class AddcredentialsComponent implements OnInit {

  constructor(public userservice:UserService ,public router:Router,
    ) { }

  id:any;

  ngOnInit(): void {

    this.id=this.userservice.getuserId();
  console.log(this.id);


  }
  submitcred(f:NgForm){
    this.userservice.addcredentials(f.value).subscribe((res)=>{
      console.log(res);
      alert('Credentials added successfully')
      // this.router.navigateByUrl('/profile')


    },(err)=>{
      console.log(err);
      alert('Error in adding credentials')
    }
    )

  }


}
