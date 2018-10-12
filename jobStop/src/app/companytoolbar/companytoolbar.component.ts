import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  homeFunc(){
    this.home = true;
    this.profile = false;
    this.candidatesapplied = false;
    this.addjob = false;
  }
  profileFunc(){
    this.home = false;
    this.profile = true;
    this.candidatesapplied = false;
    this.addjob = false;
  }
  candidatesappliedFunc(){
    this.home = false;
    this.profile = false;
    this.candidatesapplied = true;
    this.addjob = false;
  }

  addjobFunc(){
    this.home = false;
    this.profile = false;
    this.candidatesapplied = false;
    this.addjob = true;

  }

}
