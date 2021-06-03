import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,loginUser} from './user.model';//front end
import{Addcredentials} from './addcredentials.model';
import{Answer} from './answer.model';
import{PostQue} from './post-que.model';
//import { Observable } from 'rxjs'
import{Profile} from './profile.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  id:any;
  userdata:any=[];
  userinfo:any=[];


  credentialdata:any=[];
  cred:any=[];

  public newUser : User={
    name:this.userinfo.name,//this is written so that it picks up the values already stored in the response...if u dont change them it will pick ups by default
    email:this.userinfo.email,
    contact:this.userinfo.contact,
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
    userid:this.getuserId(),
    credentialid:this.getcredid(),
    date:'',
  };


  public addcred:Addcredentials={
    location:this.cred.location,
    profile:this.cred.profile,
    education:this.cred.education,
    dateofbirth:this.cred.dateofbirth,
    workexperience:this.cred.workexperience,
    address:this.cred.address,
    userid:this.getuserId()
  };

  public profileimage:Profile={
    userid:this.getuserId(),
    imagepath:'',
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
    return this.http.post('http://localhost:3000/addcred', credentials);
  }

  displaycredentials(id:any){
    return this.http.get('http://localhost:3000/displaycred/'+id);
  }

  updatecredentials(selectedcred:Addcredentials){
    return this.http.put(`${'http://localhost:3000/updateCredentials'}/${this.getuserId()}`,selectedcred);
  }

  addQuePost(quepost:PostQue)
  {
    return this.http.post('http://localhost:3000/addnewQuepost',quepost);
  }

  displayQPost(id:any)
  {
    return this.http.get('http://localhost:3000/displayQuepost/'+id);
  }



//for adding answer
addanswer(answers:Answer){
  return this.http.post('http://localhost:3000/addans',answers);
};

//to display all the answers of the particular questions
displayanswer(id:any){
  return this.http.get('http://localhost:3000/displayans/'+id);
}

displayallans(){
  return this.http.get('http://localhost:3000/displayallans');
}

dispUserAns(id:any){
  return this.http.get('http://localhost:3000/displayUserans/'+id);
}



//for updating user
updateuser(selected:User){
  return this.http.put(`${'http://localhost:3000/updateRecord'}/${this.getuserId()}`,selected);
};



//for getting list of registered user
getAllusers(){
  return this.http.get('http://localhost:3000/allusers');
}


//for getting list of all the questionspo
getAllQuestions(){
  return this.http.get('http://localhost:3000/allques');
}

getAllQuestions2(){
  return this.http.get('http://localhost:3000/allques2/');
}



userimage(profilepic:Profile){
  return this.http.post('http://localhost:3000/imageupload',profilepic);
}

// login
loggedin(){
  return localStorage.getItem('usertoken');
 }




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
 return localStorage.removeItem('usertoken');
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





 //for storing questionid
 setquestionid(qid:string){
     localStorage.setItem('questionid',qid);
   }

   getquestionid(){
     return localStorage.getItem('questionid');

   }

   deletequestionid(){
     localStorage.removeItem('questionid');
   }





setcredid(cid:string){
  localStorage.setItem('credentialid',cid)

}
   getcredid(){
    return localStorage.getItem('credendialid')
   }





 //for getting user payload
getPayload()
{
  var token=this.getToken();

  if(token)
  {
    var userpayload=atob(token.split('.')[1]);
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
