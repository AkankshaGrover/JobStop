import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
// import { FirebaseUISignInFailure } from '../../../projects/firebaseui-angular-library/src/lib/firebaseui-angular-library.helper';
import { FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

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

}


  