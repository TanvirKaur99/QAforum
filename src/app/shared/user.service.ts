import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,loginUser} from './user.model';//front end
import{Addcredentials} from './addcredentials.model';
import{Answer} from './answer.model';
import{PostQue} from './post-que.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

//   credentialdata:any=[];
//   cred:any=[];


//   credentialsdata(){
//   this.displaycredentials(this.getuserId()).subscribe((res)=>{
//     this.credentialdata=res;
//     this.cred=this.credentialdata.data;
//     console.log(this.cred);
// }
// ,(err)=>{
// console.log(err);

// })
//   }

  public newUser : User={
    name:'',
    email:'',
    contact:'',
    password:'',
    confirmpassword:'',

  }

  public existingUser:loginUser={
    email:'',
    password:''
  }

  public newQuePost:PostQue={
    question:'',
    category:'',
    about:'',
    user:this.getuserId()


  }

  public answers:Answer={
    answer:'',
    questionid:'',
    // questionid:this.que[0]._id,
    userid:this.getuserId()
  };


  // public addcred:Addcredentials={
  //   location:this.cred.location,
  //   profile:this.cred.profile,
  //   education:this.cred.education,
  //   dateofbirth:this.cred.dateofbirth,
  //   workexperience:this.cred.workexperience,
  //   address:this.cred.address,
  //   user:this.getuserId()
  // };



  public addcred:Addcredentials={
      location:'',
      profile:'',
      education:'',
      dateofbirth:'',
      workexperience:'',
      address:'',
      user:this.getuserId()
    };




  constructor(private http:HttpClient) { }


  register(user:User)
  {
    return this.http.post('http://localhost:3000/newUser',user);
  }

   //calling login api
  login(existUser:loginUser)
  {
    return this.http.post('http://localhost:3000/authentication',existUser);
  }

  //to display profile of the user calling userSelected api
  display(id:any){
    return this.http.get('http://localhost:3000/userinfo/'+id);
  }

  addcredentials(credentials:Addcredentials){
    return this.http.post('http://localhost:3200/addcred', credentials);
  }

  displaycredentials(id:any){
    return this.http.get('http://localhost:3200/displaycred/'+id);
  }



  addQuePost(quepost:PostQue)
  {
    return this.http.post('http://localhost:3000/addnewQuepost',quepost);
  }

  displayQPost(id:any)
  {
    return this.http.get('http://localhost:3000/displayQuepost/'+id);
  }


addanswer(answers:Answer){
  return this.http.post('http://localhost:3200/addans',answers);
};




//to store the token after login

setToken(token:string)
{
  localStorage.setItem('usertoken',token);
}

getToken()
{
  return localStorage.getItem('usertoken');
}

deleteToken()
{
  localStorage.removeItem('usertoken');
}

//for storing user id

 setuserId(id:string)
 {
   localStorage.setItem('userid',id);
 }
 getuserId()
 {
   return localStorage.getItem('userid');
 }
 deleteuserId()
 {
   localStorage.removeItem('userid');
 }

 //for getting user payload
getPayload()
{
  var token=JSON.stringify(this.getToken());
  var userpayload=atob(token.split('.')[1]);
  if(userpayload)
  {
    return JSON.parse(userpayload);
  }
  else
  {
    return null;
  }

}

isloggedIn()
{
  var userpayload=this.getPayload();
  if(userpayload)
  {
    return userpayload.exp>Date.now()/1000;
  }
  else
  {
    return null;
  }
}







}
