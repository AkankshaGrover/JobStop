import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';


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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeFunc() {
    this.home = true;
    this.profile = false;
    this.candidatesapplied = false;
    this.addjob = false;
    // this.router.navigate(['totalapplicants']);
  }
  profileFunc() {
    this.home = false;
    this.profile = true;
    this.candidatesapplied = false;
    this.addjob = false;
    // this.router.navigate(['companyprofile']);
  }
  candidatesappliedFunc() {
    console.log("function called")
    this.home = false;
    this.profile = false;
    this.candidatesapplied = true;
    this.addjob = false;
    // this.router.navigate(['candidatestatus']);
  }    

  addjobFunc() {
    this.home = false;
    this.profile = false;
    this.candidatesapplied = false;
    this.addjob = true;
    // this.router.navigate(['jobprofile']);
  }

}
