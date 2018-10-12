import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent implements OnInit {
  job = {
  "companyname":"",
  "contactperson": "",
  "contactnumber":"",
  "jobtitle": "",
  "location": "",
  "package":"",
  "description": "",
  "skills":""

  }
  

  constructor() { }

  ngOnInit() {
   
  }

  addJob() {
    console.log(this.job);
  }

}
