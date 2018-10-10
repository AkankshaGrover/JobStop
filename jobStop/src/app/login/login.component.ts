import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { FirebaseUISignInFailure } from 'firebaseui-angular';
// import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  activeApplicant: string = "active"
  activeCompany: string

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(d => console.log(d));
  }

    successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
      console.log('successCallback', data);
    }

    errorCallback(data: FirebaseUISignInFailure) {
      console.warn('errorCallback', data);
    }

    logout() {
      this.afAuth.auth.signOut();
    }

    login(type){
        console.log(type);
    }
    Applicant()
    {
      this.activeApplicant = "active";
      this.activeCompany = "";
    }
    Company()
    {
      this.activeCompany = "active";
      this.activeApplicant= "";
    }
}


  