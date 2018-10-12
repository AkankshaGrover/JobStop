import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company = {
  "companyname" : "",
  "hubs" : "",
  "history" : "",
  "website" : "",
  "description" : "",
  "topclients" : "",
  "emailids" : "",
  "contactnumber" : "",  
  "address" : ""
  }
  
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  addCompany(){
    console.log(this.company);
  }
  
}

