import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CandidateService } from '../services/candidate.service'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-candidateprofile',
  templateUrl: './candidateprofile.component.html',
  styleUrls: ['./candidateprofile.component.css']
})

export class CandidateprofileComponent implements OnInit {
  addProject = true;
  candidate = {
    "name": "",
    "address": "",
    "emailid": "",
    "contactnumber": "",
    "techskills": "",
    "projects": [
      {
      "pname": "",
      "pdescription": ""
    }
  ],
    "qualifications": {
      "tenth_percentage" : "",    
      "tenth_instituition": "",
      "tenth_year": "",
      "twelfth_percentage": "",
      "twelfth_instituition": "",
      "twelfth_year" : "",
      "ug_percentage" : "",
      "ug_instituition" : "",
      "ug_year": "",
      "ug_degree" : "",
      "ug_field" : "",
      "pg_percentage" : "",
      "pg_instituition" : "",
      "pg_year" : "",
      "pg_field" : "",
      "pg_degree": ""
    },
    "uid": this.session.retrieve('user')[0].uid
  }

  data;
  project = {
    "pname": "",
    "pdescription": ""
  };
  async addCandidate(value) {
    this.addCandidatetoDB.CandidateData(this.candidate);
    this.alerts.setMessage('Details saved successfully!', 'success');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('success', 'icon', 'check')
    
  }

  constructor(db: AngularFireDatabase, private session: SessionStorageService, private addCandidatetoDB: CandidateService, private alerts: AlertsService) {
    this.data = db.list('/candidate');
  }

  ngOnInit() {
  }

  addProjectFunc() {

    this.addProject = !this.addProject;
    // this.candidate.projects.push(this.project)
  }

  addProjectFunc1() {
    // if (this.candidate.name && this.candidate.contactnumber && this.candidate.address && this.candidate.emailid &&
    //   this.candidate.qualifications.ug_instituition && this.candidate.qualifications.ug_year &&
    //   this.candidate.qualifications.ug_field && this.candidate.qualifications.ug_degree)  {
        // this.addProject = !this.addProject;     

        // debugger;
        // this.project.pname = this.project.pname;  
        // this.project.pdescription = value.pdescription;
        // debugger;
    // console.log(this.candidate.projects);
        let tempProj = Object.assign({}, this.project);
        this.candidate.projects.push(tempProj)
  
        this.project.pdescription=""
        this.project.pname=""
        
        // this.candidate.projects.push(this.projects)
       



      // alert("Project Added");
    // } 
    // else {
    //   alert("Enter User Details");
    // }

    // console.log(this.candidate.projects);
    this.addProject = !this.addProject;
  }
  fillAllFields()
  {
    this.addCandidatetoDB.CandidateData(this.candidate);
    this.alerts.setMessage('Please fill all the Fields', 'error');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('error', 'icon', 'check')
  }

  // year(event) {
  //   this.candidate.qualifications.ug_year = event.target.value;
  // }
}
