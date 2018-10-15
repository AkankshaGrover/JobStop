import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { CompanyService } from "../services/company.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent implements OnInit {
  job = {
    "companyname": "",
    "contactperson": "",
    "contactnumber": "",
    "jobtitle": "",
    "location": "",
    "package": "",
    "description": "",
    "skills": ""
  }
  jobs = [];

  constructor(private router: Router, private userService: UserService, private companyService: CompanyService, private db2: AngularFireDatabase) { }

  ngOnInit() {
  }

  addJob() {
    this.jobs.push({
      "companyname":this.job.companyname,
      // "contactperson" : value.contactperson,
      // "contactnumber" : value.contactnumber,
      "jobtitle": this.job.jobtitle,
      "location": this.job.location,
      "package": this.job.package,
      "description": this.job.description,
      "skills": this.job.skills
    });
   console.log("this.jobs");  
    this.companyService.UpdateCompanyData(this.jobs)
    // this.companyService.;
  }

  addMoreJobs(){
    this.jobs.push({
      "companyname": this.job.companyname,
      // "contactperson" : value.contactperson,
      // "contactnumber" : value.contactnumber,
      "jobtitle": this.job.jobtitle,
      "location": this.job.package,
      "package": this.job.package,
      "description": this.job.description,
      "skills": this.job.skills
    });
    console.log(this.jobs);
    this.companyService.UpdateCompanyData(this.jobs)   
    // setTimeout(function () { window.location.reload(); }, 5000);
  }

}
