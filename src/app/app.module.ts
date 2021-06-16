import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TrustedAreaComponent } from './trusted-area/trusted-area.component';
import { RecentAreaComponent } from './recent-area/recent-area.component';
import { RequestBackComponent } from './request-back/request-back.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnswersComponent } from './answers/answers.component';
import { AddQuestionComponent } from './add-question/add-question.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';

import{FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
//material modules
import{MaterialModule} from './material.module';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddcredentialsComponent } from './addcredentials/addcredentials.component';
import { AuthGuard } from './shared/auth.guard';
import { EditCredentialsComponent } from './edit-credentials/edit-credentials.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderAreaComponent,
    TeamProfileComponent,
    TrustedAreaComponent,
    RecentAreaComponent,
    RequestBackComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    ContactComponent,
    HelpComponent,
    UserProfileComponent,
    AnswersComponent,
    AddQuestionComponent,
    LogoutComponent,
    EditprofileComponent,
    AddcredentialsComponent,
    EditCredentialsComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FileUploadModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
