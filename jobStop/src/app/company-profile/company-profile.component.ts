import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../services/user.service";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyname: string;
  hubs: string;
  history: string;
  website: string;
  description: string;
  topclients: string;
  emailids: string;
  contactnumber: string;
  address: string;

  dataToBePushed=[];
  name: string;
  email: string;
  contact_details: string;
  location: string;
  jobs = [];

  constructor(private router: Router, private userService: UserService, private db2: AngularFireDatabase) { }

  ngOnInit() {
  }

  addCompany(value) {

    this.jobs.push({
      "Job Title": "full stack web",
      "postDesc": "sdghcags",
      "skills required": "JS, MEAN Stack",
      "package_offered": "6 lpa",
      "location": "bangalore"
    })
    this.jobs.push({
      "Job title": "Java developer",
      "postDesc": "Pandit",
      "package_offered": "4 lpa",
      "skills required": "Java Core/Advanced",
      "location": "delhi"
    })
    this.companyname = value.companyname;
    this.hubs = value.hubs;
    this.history = value.history;
    this.website = value.website;
    this.description = value.description;
    this.topclients = value.topclients;
    this.emailids = value.emailids;
    this.contactnumber = value.contactnumber;
    this.address = value.address;
    console.log(this.companyname, this.hubs, this.history, this.website, this.description, this.topclients, this.emailids, this.contactnumber, this.address);


    console.log("hi"+JSON.stringify(this.userService.userData));
    this.name = this.companyname;
    this.email = value.emailids;
    this.contact_details = value.contactnumber;
    this.location = this.hubs;
    this.jobs = this.jobs;
    // this.dataToBePushed.push(this.name );
    // this.dataToBePushed.push(this.email);
    // this.dataToBePushed.push(this.contact_details);
    // this.dataToBePushed.push(this.location);
    // this.dataToBePushed.push(this.jobs);
    console.log("hi" + JSON.stringify(this.dataToBePushed));


    this.db2.list('/company').push({
      name:this.name,
      email:this.email,
      contact_details:this.contact_details,
      location:this.hubs,
      jobs:this.jobs
    })
  }

}

