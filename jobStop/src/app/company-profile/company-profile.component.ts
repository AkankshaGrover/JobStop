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
  companyname: string;
  hubs: string;
  history: string;
  website: string;
  description: string;
  topclients: string;
  emailids: string;
  contactnumber: string;
  address: string;
  // userid:string= this.userService.uid();
  dataToBePushed = [];
  name: string;
  email: string;
  contact_details: string;
  location: string;
  jobs = [];
  candidatesApplied=[];

   async addCompany(value) {

    // this.jobs.push({
    //   "Job Title": "NA",
    //   "postDesc": "NA",
    //   "skills required": "NA",
    //   "package_offered": "NA",
    //   "location": "NA"
    // })
    await value;
    debugger;
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
    // console.log(this.userid)
    
    console.log("hi" + JSON.stringify(this.userService.userData));
    this.name = this.companyname;
    this.email = value.emailids;
    this.contact_details = value.contactnumber;
    this.location = this.hubs;
    this.jobs = this.jobs;
     this.candidatesApplied.push("none")
    // this.dataToBePushed.push(this.name );
    // this.dataToBePushed.push(this.email);
    // this.dataToBePushed.push(this.contact_details);
    // this.dataToBePushed.push(this.location);
    // this.dataToBePushed.push(this.jobs);
    // console.log("hi" + JSON.stringify(this.dataToBePushed));
    this.dataToBePushed.push({
      name: this.name,
      email: this.email,
      contact_details: this.contact_details,
      location: this.hubs,
      jobs: this.jobs,
      candidatesApplied:this.candidatesApplied
    })

   this.companyService.CompanyData(this.dataToBePushed[0])

    this.router.navigate(['jobprofile'])

    // this.db2.list('/company').push(this.dataToBePushed[0])
  }
  constructor(private router: Router, private userService: UserService, private companyService: CompanyService, private db2: AngularFireDatabase) { }

  ngOnInit() {
  }
}