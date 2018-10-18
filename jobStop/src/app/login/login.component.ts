import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { FirebaseUISignInFailure } from 'firebaseui-angular';
import { Router } from '@angular/router'
import { UserService } from "../services/user.service";
import { CandidateService } from "../services/candidate.service";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { Observable} from 'rxjs';
import { AlertsService } from 'angular-alert-module';
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
  items: Observable<any[]>;
  item: Observable<any[]>;
  foo

  users;
  constructor(private localStorage: LocalStorageService, private session: SessionStorageService,private afAuth: AngularFireAuth, private router: Router, private db2: AngularFireDatabase,
    private userService: UserService, private alerts: AlertsService,private candidateService:CandidateService) {
      // let au= this.afAuth.auth.currentUser
      // console.log("hi"+au)
    // let au=  this.afAuth.auth.signOut;

      // this.logout()
    
  }

  ngOnInit(): void {
    this.afAuth.auth.signOut;

    // this.afAuth.authState.subscribe(d => console.log("ye dekho"+console.log(d)));

  }
 
  async  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
  console.log('login hogya', data.authResult.user.displayName);
  this.afAuth.authState.subscribe( d => this.data= d.providerData );
  await this.data;
  await this.userService.UserData(this.data)

  if (this.type == 'Company' )
  { 
    this.items = this.db2.list('candidate/' + this.userService.Uid()).valueChanges();
    this.items.subscribe(res =>
        {
      // console.log(res[0]);
          // debugger;
        if(res[0]!=undefined)
        {
          console.log(res);
          this.alerts.setMessage('You are already registered as an applicant', 'warn');
          this.alerts.setDefaults('timeout', 2);
          this.alerts.setConfig('warn', 'icon', 'warning')
          this.logout();
        }
        else{
          console.log(res)
          this.router.navigate(['companytoolbar'])
        }
      } 
      )
  }
  else if (this.type == 'Applicant') 
  { 
    this.items = this.db2.list('company/' + this.userService.Uid()).valueChanges();
    this.items.subscribe(res => {
      if (res[0] != undefined){
        console.log(res);

        this.alerts.setMessage('You are already registered as a company', 'warn');
        this.alerts.setDefaults('timeout', 2);
        this.alerts.setConfig('warn', 'icon', 'warning')
        this.logout();
      }
      else {
        console.log(res)
        this.candidateService.setData();
        this.router.navigate(['candidatetoolbar'])
      }
    }

    )
  }
}

errorCallback(data: FirebaseUISignInFailure) {
  console.warn('nahi hua login', data);
}

public logout() {
  // console.log(this.afAuth.user);
  this.afAuth.auth.signOut();
  this.localStorage.clear();
  this.session.clear('user');
  this.session.clear('candidate');
  this.session.clear('company');
  // console.log(this.session.retrieve('user'));
  this.router.navigate(['login'])
 
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


