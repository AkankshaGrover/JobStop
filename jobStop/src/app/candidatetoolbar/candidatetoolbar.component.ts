import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-candidatetoolbar',
  templateUrl: './candidatetoolbar.component.html',
  styleUrls: ['./candidatetoolbar.component.css']
})
export class CandidatetoolbarComponent implements OnInit {
  home = true;
  profile = false;
  jobsapplied = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeFunc() {
    this.home = true;
    this.profile = false;
    this.jobsapplied = false;
    this.router.navigate(['totaljobs']);
  }
  profileFunc() {
    this.home = false;
    this.profile = true;
    this.jobsapplied = false;
    this.router.navigate(['candidateprofile']);
  }
  jobsappliedFunc() {
    this.home = false;
    this.profile = false;
    this.jobsapplied = true;
    this.router.navigate(['candidatestatus']);
  }
}
