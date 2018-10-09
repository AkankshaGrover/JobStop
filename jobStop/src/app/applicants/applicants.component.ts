import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
 items=[
   {name:"Shubham",
    CGPA:7.90,
    Qualification:"B.E."
   },
   {name:"inder",
    CGPA:7.50,
    Qualification:"B.Tech."
   },
   {name:"Aka",
    CGPA:8.90,
    Qualification:"B.A."
   }
 ]
  constructor() { }

  ngOnInit() {
  }

}
