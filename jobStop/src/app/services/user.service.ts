import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { FirebaseUISignInFailure } from 'firebaseui-angular';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { Routes,Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  uid;
  userData;
  constructor(private session: SessionStorageService, private afAuth: AngularFireAuth, private router: Router) { 
    
  }

  userName(){
    // debugger;
    console.log(this.session.retrieve('user')[0].displayName)
    return this.session.retrieve('user')[0].displayName
  }

  async UserData(data) {

    this.userData = await data;
    this.session.store('user', data);
    console.log(this.session.retrieve('user')[0].uid);
  }

  Uid() {
    return this.session.retrieve('user')[0].uid
  }

 
    // // console.log(this.afAuth.authState);
    // this.afAuth.auth.signOut();
    // }

  async  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('login hogya', data.authResult.user.displayName);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('nahi hua login', data);
  }

  public logout() {
    // console.log(this.afAuth.user);
    this.afAuth.auth.signOut();
    this.session.clear('user');
    this.session.clear('candidate');
    this.session.clear('company');
    console.log(this.session.retrieve('user'));
    this.router.navigate(['login'])
  }

}
