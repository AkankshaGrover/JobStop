import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { FirebaseUISignInFailure } from 'firebaseui-angular';
import { Router } from '@angular/router'
import { UserService } from "../services/user.service";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
// import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  activeApplicant: string = "active"
  activeCompany: string
  type: string = 'Applicant';
  data;

  users;
  constructor(private afAuth: AngularFireAuth, private router: Router, private db2: AngularFireDatabase,
    private userService: UserService) {

  }

  ngOnInit(): void {

    // this.afAuth.authState.subscribe(d => console.log("ye dekho"+console.log(d)));

  }
 

  async  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
  console.log('login hogya', data.authResult.user.displayName);
  this.afAuth.authState.subscribe( d => this.data= d.providerData );
  await this.data;
  await this.userService.UserData(this.data)
  // console.log(this.data)
  
  // this.db2.list('/candidate')
  //   .valueChanges()
  //   .subscribe(res => {

  //     console.log("inside db2.list method"+res[0].name);

  //   })

  if (this.type == 'Company' )
  { this.router.navigate(['companytoolbar']) }
  else if (this.type == 'Applicant') 
  { this.router.navigate(['candidatetoolbar']) }
}

errorCallback(data: FirebaseUISignInFailure) {
  console.warn('nahi hua login', data);
}

public logout() {
  // console.log(this.afAuth.user);
  
  this.afAuth.auth.signOut();
}

login(type){
  this.type = type;
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
  this.activeApplicant = "";
}
}


