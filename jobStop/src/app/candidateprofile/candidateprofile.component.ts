import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CandidateService } from '../services/candidate.service'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-candidateprofile',
  templateUrl: './candidateprofile.component.html',
  styleUrls: ['./candidateprofile.component.css']
})

export class CandidateprofileComponent implements OnInit {
  // addProject = false;
  candidate = {
    "name": "",
    "address": "",
    "emailid": "",
    "contactnumber": "",
    "techskills": "",
    "projects": [{
      "pname": "",
      "pdescription": ""
    }],
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

  // BE = ["Civil Engineering", "Geo Informatics", "Agriculture and Irrigation Engineering", "Mechanical Engineering",
  //   "Electronics and Communication Engineering", "Material Science and Engineering", "Mining Engineering",
  //   "Industrial Engineering", "Aeronautical Engineering", "Automobile Engineering", " Electrical and Electronics Engineering",
  //   "Computer Science and Engineering"];
  // B_Tech = ["Information Technology", "Computer Science and Engineering", " Information Technology",
  //   "Chemical Engineering", "Textile Technology", "Industrial Bio-Technology", "Industrial Bio-Technology", "Pharmaceutical Technology",
  //   "Rubber and Plastic Technology", " Petroleum Engineering and Technology"];
  // BA = ["Media and Communication", "Culinary Arts", "Mass Communication", "English", "Social Work with Specialisation in Rural Development", "Mass Communication", "English Language and Literature"];
  // arrays = [];


  data;
  value;
  name: string;
  address: string;
  emailid: string;
  contactnumber: string;
  qualifications = [];
  projects = {
    "pname" : "",
    "pdescription" : ""
  }; 

  twelfth_percentage: string;
  twelfth_institution: string;
  twelfth_year: string;

  tenth_year: string;
  tenth_institution: string;
  tenth_percentage: string;

  ug_instituition: string;
  ug_percentage: string;
  ug_year: string;
  ug_field: string;
  ug_degree: string;

  pg_year: string;
  pg_institution: string;
  pg_percentage: string;
  pg_field: string;
  pg_degree: string;

  techskills: string;

  async addCandidate(value) {
    
    name: this.candidate.name  
    address: this.candidate.address 
    emailid: this.candidate.emailid
    contactnumber: this.candidate.contactnumber 
    qualifications: this.candidate.qualifications;
    techskills: this.candidate.techskills; 
    uid : this.session.retrieve('user')[0].uid;
    console.log(value)
    this.projects.pname = this.candidate.projects[0].pname;
    this.projects.pdescription = this.candidate.projects[0].pdescription;
    // this.candidate.projects.push(this.projects)

    // console.log(this.candidate.projects);
    
    this.addCandidatetoDB.CandidateData(this.candidate);
    console.log((this.candidate))
    
  }

  constructor(db: AngularFireDatabase, private session: SessionStorageService, private addCandidatetoDB: CandidateService) {
    this.data = db.list('/candidate');
  }

  ngOnInit() {
  }


  // specializationfunc(event) {
  //   this.specialization = event.target.value;
  //   if (event.target.value == "B-Tech") {
  //     this.arrays = this.B_Tech;
  //   }
  //   else if (event.target.value == "BE") {
  //     this.arrays = this.BE;
  //   }
  //   else if (event.target.value == "BA") {
  //     this.arrays = this.BA;
  //   }
  // }

  // departmentfunc(event) {
  //   this.department = event.target.value;
  // }

  // year(event) {
  //   console.log(event)
  //   this.ugyear = event.target.value;
  // }


  // addProjectFunc() {
  //   this.addProject = !this.addProject;
  // }

  // addProjectFunc1(value) {
  //   if (this.candidate.name && this.candidate.contactnumber && this.candidate.address && this.candidate.emailid &&
  //     this.candidate.qualifications.ug_instituition && this.candidate.qualifications.ug_year &&
  //     this.candidate.qualifications.ug_field && this.candidate.qualifications.ug_degree)  {
  //       console.log(value)
  //       this.projects.pname = value.pname;  
  //       this.projects.pdescription = value.pdescription;
  //       this.candidate.projects.push(this.projects)
  //       console.log(this.candidate.projects);
  //     // alert("Project Added");
  //   } 
    // else {
    //   alert("Enter User Details");
    // }

  //   console.log(this.candidate.projects);
  //   this.addProject = !this.addProject;
  // }

  year(event) {
    this.candidate.qualifications.ug_year = event.target.value;
  }
}
