import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
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

  constructor(private router: Router, session: SessionStorageService) {
    if (session.retrieve('user') == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  homeFunc() {
    this.home = true;
    this.profile = false;
    this.jobsapplied = false;
    // this.router.navigate(['totaljobs']);
  }
  profileFunc() {
    this.home = false;
    this.profile = true;
    this.jobsapplied = false;
    // this.router.navigate(['candidateprofile']);
  }
  jobsappliedFunc() {
    this.home = false;
    this.profile = false;
    this.jobsapplied = true;
    // this.router.navigate(['candidatestatus']);
  }
}
