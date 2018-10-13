import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CandidateService } from '../services/candidate.service'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

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
    "tenthyear": "",
    "tenthinstitution": "",
    "tenthpercentage": "",
    "uginstitution": "",
    "specialization": "",
    "department": "",
    "ugyear": "",
    "techskills": "",
    "projects": [],
  }

  // BE = ["Civil Engineering", "Geo Informatics", "Agriculture and Irrigation Engineering", "Mechanical Engineering",
  //   "Electronics and Communication Engineering", "Material Science and Engineering", "Mining Engineering",
  //   "Industrial Engineering", "Aeronautical Engineering", "Automobile Engineering", " Electrical and Electronics Engineering",
  //   "Computer Science and Engineering"];
  // B_Tech = ["Information Technology", "Computer Science and Engineering", " Information Technology",
  //   "Chemical Engineering", "Textile Technology", "Industrial Bio-Technology", "Industrial Bio-Technology", "Pharmaceutical Technology",
  //   "Rubber and Plastic Technology", " Petroleum Engineering and Technology"];
  // BA = ["Media and Communication", "Culinary Arts", "Mass Communication", "English", "Social Work with Specialisation in Rural Development", "Mass Communication", "English Language and Literature"];
  arrays = [];


  data;
  value;
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
  ugpercentage: string;
  ugyear: string;
  ugfield: string;
  ugdegree: string;

  pgyear: string;
  pginstitution: string;
  pgpercentage: string;
  pgfield: string;
  pgdegree: string;

  techskills: string;

  qualifications = [];
  projects = [];

  async addCandidate(value) {
    this.qualifications.push({
      tenth_percentage: value.tenthpercentage,
      tenth_instituition: value.tenthpercentage,
      tenth_passing: value.tenthyear
    }),
      this.qualifications.push({
        twelfth_percentage: value.twelfthpercentage,
        twelfth_intituition: value.twelfthinstitution,
        twelfth_passing: value.twelfthyear
      }),
      this.qualifications.push({
        ug_percentage: value.ugpercentage,
        ug_intituition: value.uginstitution,
        ug_passing: value.ugyear,
        ug_field: value.ugfield,
        ug_degree: value.ugdegree
      }),
      this.qualifications.push({
        pg_percentage: value.pgpercentage,
        pg_intituition: value.pginstitution,
        pg_passing: value.pgyear,
        pg_field: value.pgfield,
        pg_degree: value.pgdegree
      }),
      console.log((value))
      this.data.push({
        name: value.name,
        address: value.address,
        emailid: value.emailid,
        contactnumber: value.contactnumber,
        qualifications: this.qualifications,
        techskills: value.techskills,
    })
  }

  constructor(db: AngularFireDatabase) {
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


  addProjectFunc() {
    this.addProject = !this.addProject;
  }

  addProjectFunc1(value) {
    if (this.name && this.contactnumber && this.address && this.emailid && this.uginstitution && this.ugyear && this.ugfield && this.ugdegree) {
      this.projects.push({
        "pname": value.pname,
        "pdescription": value.pdescription
      })
      alert("Project Added");
    } else {
      alert("Enter User Details");
    }

    console.log(this.projects);
    this.addProject = !this.addProject;
  }

  // complete() {

  // }

  year(event) {
    this.candidate.ugyear = event.target.value;
  }
}
