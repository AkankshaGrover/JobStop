import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatetoolbar',
  templateUrl: './candidatetoolbar.component.html',
  styleUrls: ['./candidatetoolbar.component.css']
})
export class CandidatetoolbarComponent implements OnInit {
  home = true;
  profile = false;
  jobsapplied = false;

  constructor() { }

  ngOnInit() {
  }

  homeFunc(){
    this.home = true;
    this.profile = false;
    this.jobsapplied = false;
  }
  profileFunc(){
    this.home = false;
    this.profile = true;
    this.jobsapplied = false;
  }
  jobsappliedFunc(){
    this.home = false;
    this.profile = false;
    this.jobsapplied = true;
  }

}
