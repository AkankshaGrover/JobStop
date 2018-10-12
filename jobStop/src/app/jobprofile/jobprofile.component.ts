import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent implements OnInit {
  companyname: string;
  contactperson: string;
  contactnumber: string;
  jobtitle: string;
  location: string;
  package: string;
  description: string;
  skills: string;

  constructor() { }

  ngOnInit() {
  }

  addJob(value) {
    this.companyname = value.companyname;
    this.contactperson = value.contactperson;
    this.contactnumber = value.contactnumber;
    this.jobtitle = value.jobtitle;
    this.location = value.location;
    this.package = value.package;
    this.description = value.description;
    this.skills = value.skills;
  }

}
