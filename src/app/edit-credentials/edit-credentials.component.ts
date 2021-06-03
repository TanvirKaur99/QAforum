import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-credentials',
  templateUrl: './edit-credentials.component.html',
  styleUrls: ['./edit-credentials.component.css']
})
export class EditCredentialsComponent implements OnInit {

  constructor(public userservice:UserService,
    public router:Router) { }

  editcred:any=[];
  edit:any=[];

  id:any;
  credentialdata:any=[];
  cred:any=[];

  ngOnInit(): void {

    this.id=this.userservice.getuserId();
    console.log(this.id);

    this.userservice.displaycredentials(this.id).subscribe((res)=>{
      // console.log(res)
           this.credentialdata=res;
            console.log(this.credentialdata);
            this.cred=this.credentialdata.data[0];
            console.log(this.cred);
    }
    ,(err)=>{
      console.log(err);

    })
  }




  OnSubmit(f:NgForm){
    console.log(f.value);
    this.userservice.updatecredentials(f.value).subscribe((res)=>{
     console.log(res);
     this.editcred=res;
     this.edit=this.editcred.data;
     console.log(this.edit);

     alert("Credentials Updated successfully")



   })


}


  close(){
    this.router.navigateByUrl('/userprofile');
  }

}
