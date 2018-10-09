import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  items=[
    {name:"Mountblue Technologies",
    title: "full stack web",
    location:"bangalore",
    package_offered: "6 lpa",
    postDesc: "sdghcags",
    skills_required: "JS, MEAN Stack",
     image:"https://cdn0.elitmus.net/company_logos_for_job_posts/MountBlue_logo-_w_text.png"
    },
    {name:"Prime Focus",
    title: "full stack web",
    location:"bangalore",
    package_offered: "6 lpa",
    postDesc: "sdghcags",
    skills_required: "JS, MEAN Stack",
     image:"https://pmcdeadline2.files.wordpress.com/2014/07/prime-focus-logo.png?w=446&h=299&crop=1"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

 
  