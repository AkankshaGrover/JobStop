import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyname : string;
  hubs : string;
  history : string;
  website : string;
  description : string;
  topclients : string;
  emailids : string;
  contactnumber : string;  
  address : string;
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  addCompany(value){
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

  }
  
}

