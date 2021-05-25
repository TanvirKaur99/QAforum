import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,loginUser} from './user.model';//front end
import{Addcredentials} from './addcredentials.model';
import{Answer} from './answer.model';
import{PostQue} from './post-que.model';
//import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  id:any;
  userdata:any=[];
  userinfo:any=[];

  public newUser : User={
    name:this.userinfo.name,
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
    userid:this.getuserId()
  };


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
    return this.http.post('http://localhost:3000/addcred', credentials);
  }

  displaycredentials(id:any){
    return this.http.get('http://localhost:3000/displaycred/'+id);
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

dispUserAns(id:any){
  return this.http.get('http:localhost:3000/displayUserans/'+id);
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
