import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { CompaniesComponent } from './companies/companies.component';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserService } from "./services/user.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CandidatetoolbarComponent } from './candidatetoolbar/candidatetoolbar.component';
import { CompanytoolbarComponent } from './companytoolbar/companytoolbar.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { CompanyStatusComponent } from './company-status/company-status.component';
import { LoginComponent } from './login/login.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { CandidateService } from './services/candidate.service';
import { AlertsModule } from 'angular-alert-module';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },

    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    }
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    ApplicantsComponent,
    CompaniesComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CompanyProfileComponent,
    JobprofileComponent,
    CandidateprofileComponent,
    CandidatetoolbarComponent,
    CompanytoolbarComponent,
    CandidateStatusComponent,
    CompanyStatusComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    Ng2Webstorage,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    RouterModule,
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  providers: [AngularFireDatabase, LoginComponent, HeaderComponent,
    FooterComponent, UserService, AlertsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
