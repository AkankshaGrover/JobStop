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
  companyname: string;
  contactperson: string;
  contactnumber: string;
  jobtitle: string;
  location: string;
  package: string;
  description: string;
  skills: string;
  jobs = [];

  constructor(private router: Router, private userService: UserService, private companyService: CompanyService, private db2: AngularFireDatabase) { }

  ngOnInit() {
   
  }

  addJob(value) {
    this.jobs.push({
      "companyname": value.companyname,
      // "contactperson" : value.contactperson,
      // "contactnumber" : value.contactnumber,
      "jobtitle" : value.jobtitle,
      "location" : value.location,
      "package" : value.package,
      "description" : value.description,
      "skills" : value.skills
    });
   // console.log(this.jobs);  
  }

  addMoreJobs(value){
    this.jobs.push({
      "companyname": value.companyname,
      // "contactperson": value.contactperson,
      // "contactnumber": value.contactnumber,
      "jobTitle": value.jobtitle,
      "location": value.location,
      "package": value.package,
      "description": value.description,
      "skills": value.skills
    });
    console.log(this.jobs);
    this.companyService.UpdateCompanyData(this.jobs)
    
    // setTimeout(function () { window.location.reload(); }, 5000);
  }

}
