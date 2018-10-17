import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { CompanyService } from "../services/company.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AlertsService } from 'angular-alert-module'

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobprofileComponent implements OnInit {
  job = {
    "jobtitle": "",
    "location": "",
    "package": "",
    "description": "",
    "skills": ""
  }
  jobs = [
    {
      "jobtitle": "",
      "location": "",
      "package": "",
      "description": "",
      "skills": ""
    }
  ];

  constructor(private router: Router, private userService: UserService, private companyService: CompanyService, private db2: AngularFireDatabase, private alerts: AlertsService) { }

  ngOnInit() {
  }

  addJobs() {
    this.companyService.UpdateCompanyData(this.jobs)
    this.alerts.setMessage('Details saved successfully!', 'success');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('success', 'icon', 'check')
  //  console.log("this.jobs");  
  }

  addMoreJobs(){
    let tempProj = Object.assign({}, this.job);
    this.jobs.push(tempProj)
    // console.log(this.jobs);
    this.job.jobtitle = ""
    this.job.package = ""
    this.job.location = ""
    this.job.description = ""
    this.job.skills = ""
    // console.log(this.jobs);
    
  }
}
