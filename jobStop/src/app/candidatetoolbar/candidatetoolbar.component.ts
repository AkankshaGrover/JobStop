import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LocationStrategy } from '@angular/common';
import { SessionStorageService } from 'ngx-webstorage';
// @import 'node_modules/angular5-toaster/toaster';
@Component({
  selector: 'app-candidatetoolbar',
  templateUrl: './candidatetoolbar.component.html',
  styleUrls: ['./candidatetoolbar.component.css']
})
export class CandidatetoolbarComponent implements OnInit {
  home = true;
  profile = false;
  jobsapplied = false;

  constructor(private router: Router, private session: SessionStorageService) {
    if (session.retrieve('user') == null) {
      this.router.navigate(['login']);
    }

    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.jobsapplied = false;
    }

  }

  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      console.log("runhua")
      history.go(1);
    };
  }


  homeFunc() {
    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.jobsapplied = false;
    }
    else {
      this.home = true;
      this.profile = false;
      this.jobsapplied = false;
    }

    // this.router.navigate(['totaljobs']);
  }
  profileFunc() {

    this.home = false;
    this.profile = true;
    this.jobsapplied = false;
    // this.router.navigate(['candidateprofile']);
  }
  jobsappliedFunc() {

    if (this.session.retrieve('candidate') == null) {
      console.log(this.session.retrieve('candidate'))
      this.home = false;
      this.profile = true;
      this.jobsapplied = false;
    }
    else {
      this.home = false;
      this.profile = false;
      this.jobsapplied = true;
    }

    // this.router.navigate(['candidatestatus']);
  }
}
