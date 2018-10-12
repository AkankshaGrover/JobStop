import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
// import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { FlexLayoutModule } from '@angular/flex-layout';
// // import { baseURL } from './shared/baseURL';
// import { MatListModule } from '@angular/material/list';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// // import { AppRoutingModule } from './app-routing/app-routing.module';
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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantsComponent,
    CompaniesComponent,
    CompanyComponent,LoginComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompanyProfileComponent,
    JobprofileComponent,
    CandidateprofileComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    CommonModule, 
    FormsModule,
    RouterModule.forRoot([
      {path : 'header' , component : HeaderComponent},
      {path : 'footer' , component : FooterComponent},
      {path : 'companyprofile' , component : CompanyProfileComponent},
      {path : 'candidateprofile', component : CandidateprofileComponent},
      {path : 'jobprofile', component : JobprofileComponent}
    ])
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
