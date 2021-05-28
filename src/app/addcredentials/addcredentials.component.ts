import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-addcredentials',
  templateUrl: './addcredentials.component.html',
  styleUrls: ['./addcredentials.component.css']
})
export class AddcredentialsComponent implements OnInit {

  constructor(public userservice:UserService, public router:Router) { }



  credentialdata:any=[];
  cred:any=[]
  id :any

  ngOnInit(): void {
    this.id=this.userservice.getuserId();
    console.log(this.id);

  }



     submitcred(f:NgForm){
    this.userservice.addcredentials(f.value).subscribe((res)=>{
      console.log(res);
      alert('credentials added successfully')
      this.router.navigateByUrl('/userprofile')
     // this.dialog.closeAll();

    },(err)=>{
      console.log(err);
      alert('Error in adding credentials')
    }
    )

  }
  close(){
    this.router.navigateByUrl('/userprofile');
  }
}
