import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CandidateService } from '../services/candidate.service'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';
import { AlertsService } from 'angular-alert-module';
import { CandidatetoolbarComponent } from '../candidatetoolbar/candidatetoolbar.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

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
      "tenth_percentage": "",
      "tenth_instituition": "",
      "tenth_year": "",
      "twelfth_percentage": "",
      "twelfth_instituition": "",
      "twelfth_year": "",
      "ug_percentage": "",
      "ug_instituition": "",
      "ug_year": "",
      "ug_degree": "",
      "ug_field": "",
      "pg_percentage": "",
      "pg_instituition": "",
      "pg_year": "",
      "pg_field": "",
      "pg_degree": ""
    },
    "uid": this.session.retrieve('user')[0].uid
  }

  data;
  project = {
    "pname": "",
    "pdescription": ""
  };
  addCandidate() {
    if (this.candidate.name != "" && this.candidate.address != "" && this.candidate.contactnumber != "" &&
      this.candidate.emailid != "" && this.candidate.qualifications.tenth_instituition != "" && this.candidate.qualifications.tenth_percentage != "" &&
      this.candidate.qualifications.tenth_percentage != "" && this.candidate.qualifications.twelfth_instituition != "" && this.candidate.qualifications.tenth_percentage != "" &&
      this.candidate.qualifications.twelfth_year != "" && this.candidate.qualifications.ug_instituition != "" &&
      this.candidate.qualifications.ug_percentage != "" && this.candidate.qualifications.ug_year != "" && this.candidate.qualifications.ug_degree != "" &&
      this.candidate.qualifications.ug_field != "") {
      this.addCandidatetoDB.CandidateData(this.candidate);
      this.alerts.setMessage('Details saved successfully!', 'success');
      this.alerts.setDefaults('timeout', 2);
      this.alerts.setConfig('success', 'icon', 'check')
    }
    else {
      this.alerts.setMessage('Please fill the required fields', 'error');
      this.alerts.setDefaults('timeout', 2);
      this.alerts.setConfig('error', 'icon', 'warn')
    }
  }

  constructor(private candidateComponent: CandidatetoolbarComponent, db: AngularFireDatabase, private session: SessionStorageService, private addCandidatetoDB: CandidateService, private alerts: AlertsService) {
    this.data = db.list('/candidate');
  }

  ngOnInit() {
  }

  addProjectFunc1() {
    let tempProj = Object.assign({}, this.project);
    this.candidate.projects.push(tempProj)
    this.project.pdescription = ""
    this.project.pname = ""
  }
}
