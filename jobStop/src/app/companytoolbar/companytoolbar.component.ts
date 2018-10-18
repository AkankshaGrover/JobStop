import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-companytoolbar',
  templateUrl: './companytoolbar.component.html',
  styleUrls: ['./companytoolbar.component.css']
})
export class CompanytoolbarComponent implements OnInit {
  home = true;
  profile = false;
  candidatesapplied = false;
  addjob = false;

  constructor(private router: Router, private session: SessionStorageService) {
    if (session.retrieve('user') == null) {
      this.router.navigate(['login']);
    }
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }
  }
  ngOnInit() {
  }
  homeFunc() {
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }
    else {
      this.home = true;
      this.profile = false;
      this.candidatesapplied = false;
      this.addjob = false;
    }
    // this.router.navigate(['totalapplicants']);
  }
  profileFunc() {
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }
    else {
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }    // this.router.navigate(['companyprofile']);
  }
  candidatesappliedFunc() {
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }
    else {
      this.home = false;
      this.profile = false;
      this.candidatesapplied = true;
      this.addjob = false;
    }
    // this.router.navigate(['candidatestatus']);}
  }

  addjobFunc() {
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.candidatesapplied = false;
      this.addjob = false;
    }
    else {
      this.home = false;
      this.profile = false;
      this.candidatesapplied = false;
      this.addjob = true;
    }    // this.router.navigate(['jobprofile']);
  }
}
