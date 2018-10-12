import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
// import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserService } from "./services/user.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';

// // import { baseURL } from './shared/baseURL';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

// import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing/app-routing.module';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { FormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { Routes, RouterModule } from '@angular/router';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import 'hammerjs';
// import { MatInputModule } from '@angular/material/input';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpParams } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Ng2Webstorage } from 'ngx-webstorage';
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
    CompanyComponent,LoginComponent,
    HeaderComponent,
    FooterComponent,
    CompanyProfileComponent,
    JobprofileComponent,
    CandidateprofileComponent,
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
    // MatButtonModule,
    // MatInputModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatCheckboxModule,
    // MatGridListModule,
    // MatSelectModule,
    // MatSlideToggleModule,
    // MatFormFieldModule,
    // MatListModule,
    CommonModule,
    // AngularFireModule.initializeApp(uiConfig),
    AngularFireAuthModule,
    // MatDialog,
    // MatDialogRef
    // FirebaseUIModule.forRoot(uiAuthConfig)
    // NgModule
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // FlexLayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule 
    BrowserModule,
   
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    CommonModule,
    FormsModule,
  ],
  providers: [AngularFireDatabase, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
