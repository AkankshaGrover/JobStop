import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
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
    },
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
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
    // FirebaseUIModule.forRoot(uiAuthConfig)
    // NgModule
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // FlexLayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
