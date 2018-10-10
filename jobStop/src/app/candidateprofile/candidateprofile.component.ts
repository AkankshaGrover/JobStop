import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidateprofile',
  templateUrl: './candidateprofile.component.html',
  styleUrls: ['./candidateprofile.component.css']
})
export class CandidateprofileComponent implements OnInit {
  addProject = false;
  name: string;
  address: string;
  emailid: string;
  contactnumber: string;
  twelfthpercentage: string;
  twelfthinstitution: string;
  twelfthyear: string;
  tenthyear: string;
  tenthinstitution: string;
  tenthpercentage: string;
  uginstitution: string;
  specialization: string;
  department: string;
  ugyear: string;
  techskills: string;
  BE = ["Civil Engineering", "Geo Informatics", "Agriculture and Irrigation Engineering", "Mechanical Engineering",
    "Electronics and Communication Engineering", "Material Science and Engineering", "Mining Engineering",
    "Industrial Engineering", "Aeronautical Engineering", "Automobile Engineering", " Electrical and Electronics Engineering",
    "Computer Science and Engineering"];
  B_Tech = ["Information Technology", "Computer Science and Engineering", " Information Technology",
    "Chemical Engineering", "Textile Technology", "Industrial Bio-Technology", "Industrial Bio-Technology", "Pharmaceutical Technology",
    "Rubber and Plastic Technology", " Petroleum Engineering and Technology"];
  BA = ["Media and Communication", "Culinary Arts", "Mass Communication", "English", "Social Work with Specialisation in Rural Development", "Mass Communication", "English Language and Literature"];
  arrays = [];
  projects = [];


  constructor() { }

  ngOnInit() {
  }

  addCandidate(value) {
    this.name = value.name;
    this.address = value.address;
    this.emailid = value.emailid;
    this.contactnumber = value.contactnumber;
    this.tenthinstitution = value.tenthinstitution;
    this.tenthpercentage = value.tenthpercentage;
    this.tenthyear = value.tenthyear;
    this.twelfthinstitution = value.twelfthinstitution;
    this.twelfthpercentage = value.twelfthpercentage;
    this.twelfthyear = value.twelfthyear;
    this.uginstitution = value.uginstitution;
    this.ugyear = value.ugyear;
    this.techskills = value.techskills;
  }
  specializationfunc(event) {
    this.specialization = event.target.value;
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
    this.department = event.target.value;
  }

  year(event) {
    this.ugyear = event.target.value;
  }

  addProjectFunc() {
    this.addProject = !this.addProject;
  }

  addProjectFunc1(value) {
    if(this.name && this.contactnumber && this.address && this.emailid && this.uginstitution && this.ugyear && this.specialization && this.department){
      this.projects.push({
        "pame": value.pname,
        "pdescription": value.pdescription
      })
      alert("Project Added");
    }else{
      alert("Enter User Details");
    }
    
    console.log(this.projects);
    this.addProject = !this.addProject;
  }

}
