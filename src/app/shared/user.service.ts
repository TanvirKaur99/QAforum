import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,loginUser} from './user.model';//front end

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
