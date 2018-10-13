import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../services/user.service";
import { CompanyService } from "../services/company.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company = {
    "companyname": "",
    "hubs": "",
    "history": "",
    "website": "",
    "description": "",
    "topclients": "",
    "emailids": "",
    "contactnumber": "",
    "address": ""
  }

  dataToBePushed = [];
  name: string;
  email: string;
  contact_details: string;
  location: string;
  jobs = [];
  candidatesApplied = [];

 
  constructor(
    private router: Router, private userService: UserService, private companyService: CompanyService, private db2: AngularFireDatabase
    ) {
     
   }

  ngOnInit() {
  
  }

  addCompany() {

    // this.jobs.push({
    //   "Job Title": "NA",
    //   "postDesc": "NA",
    //   "skills required": "NA",
    //   "package_offered": "NA",
    //   "location": "NA"
    // })
    // console.log("hi");


    console.log(this.company);



    // console.log("hi" + JSON.stringify(this.userService.userData));
    // this.name = this.companyname;
    // this.email = value.emailids;
    // this.contact_details = value.contactnumber;
    // this.location = this.hubs;
    // this.jobs = this.jobs;
    // this.candidatesApplied.push("none")
    // this.dataToBePushed.push(this.name );
    // this.dataToBePushed.push(this.email);
    // this.dataToBePushed.push(this.contact_details);
    // this.dataToBePushed.push(this.location);
    // this.dataToBePushed.push(this.jobs);
    // console.log("hi" + JSON.stringify(this.dataToBePushed));
    this.dataToBePushed.push({
      name: this.company.companyname,
      email: this.company.emailids,
      contact_details: this.company.contactnumber,
      location: this.company.hubs,
      jobs: this.jobs,
      candidatesApplied: this.candidatesApplied
    })
    this.companyService.CompanyData(this.dataToBePushed[0])
    this.router.navigate(['jobprofile'])
    // this.db2.list('/company').push(this.dataToBePushed[0])
  }
}
