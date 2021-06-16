import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { from } from 'rxjs';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AnswersComponent } from './answers/answers.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


import{AuthGuard} from './shared/auth.guard';
import { AddcredentialsComponent } from './addcredentials/addcredentials.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditCredentialsComponent } from './edit-credentials/edit-credentials.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
//import { AddcredentialsComponent } from './addcredentials/addcredentials.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'questions',
    component:QuestionsComponent,

  },
  {
    path:'help',
    component:HelpComponent
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'answers',
    component:AnswersComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'addQuestion',
    component:AddQuestionComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'userprofile',
    component:UserProfileComponent,
    canActivate:[AuthGuard],

  },
  {
    path:'addCredentials',
    component:AddcredentialsComponent

  },
  {
    path:'editprofile',
   component:EditprofileComponent
  },
  {
    path:'editcredentials',
    component:EditCredentialsComponent
  },
  {
    path:'forgetpass',
    component:ForgotpasswordComponent
  },
  {
    path:'resetpass',
    component:ResetpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
