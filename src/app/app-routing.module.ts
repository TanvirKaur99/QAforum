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
    canActivate:[AuthGuard],
  },
  {
    path:'help',
    component:HelpComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'answers',
    component:AnswersComponent
  },
  {
    path:'addQuestion',
    component:AddQuestionComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'userprofile',
    component:UserProfileComponent

  },
  {
    path:'addCredentials',
    component:AddcredentialsComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
