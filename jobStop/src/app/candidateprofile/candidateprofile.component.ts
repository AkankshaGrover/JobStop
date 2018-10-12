import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidateprofile',
  templateUrl: './candidateprofile.component.html',
  styleUrls: ['./candidateprofile.component.css']
})
export class CandidateprofileComponent implements OnInit {
  addProject = false;
  candidate = {
  "name": "",
  "address": "",
  "emailid": "",
  "contactnumber": "",
  "twelfthpercentage": "",
  "twelfthinstitution": "",
  "twelfthyear": "",
  "tenthyear":"",
  "tenthinstitution": "",
  "tenthpercentage": "",
  "uginstitution": "",
  "specialization": "",
  "department": "",
  "ugyear": "",
  "techskills": "",
  "projects" : [],
  }
  
  BE = ["Civil Engineering", "Geo Informatics", "Agriculture and Irrigation Engineering", "Mechanical Engineering",
    "Electronics and Communication Engineering", "Material Science and Engineering", "Mining Engineering",
    "Industrial Engineering", "Aeronautical Engineering", "Automobile Engineering", " Electrical and Electronics Engineering",
    "Computer Science and Engineering"];
  B_Tech = ["Information Technology", "Computer Science and Engineering", " Information Technology",
    "Chemical Engineering", "Textile Technology", "Industrial Bio-Technology", "Industrial Bio-Technology", "Pharmaceutical Technology",
    "Rubber and Plastic Technology", " Petroleum Engineering and Technology"];
  BA = ["Media and Communication", "Culinary Arts", "Mass Communication", "English", "Social Work with Specialisation in Rural Development", "Mass Communication", "English Language and Literature"];
  arrays = [];


  constructor() { }

  ngOnInit() {
  }

  addCandidate() {
    console.log(this.candidate);
  }
  specializationfunc(event) {
    this.candidate.specialization = event.target.value;
    if (event.target.value == "B-Tech") {
      this.arrays = this.B_Tech;
    }
    else if (event.target.value == "BE") {
      this.arrays = this.BE;
    }
    else if (event.target.value == "BA") {
      this.arrays = this.BA;
    }
  }

  departmentfunc(event) {
    this.candidate.department = event.target.value;
  }

  year(event) {
    this.candidate.ugyear = event.target.value;
  }

  addProjectFunc() {
    this.addProject = !this.addProject;
  }

  addProjectFunc1(value) {
    this.candidate.projects.push({
      "pame": value.pname,
      "pdescription": value.pdescription
    })
    console.log(this.candidate.projects);
    this.addProject = !this.addProject;
  }
}
