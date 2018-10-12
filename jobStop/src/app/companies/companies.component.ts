import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('company').valueChanges();
    this.items.subscribe(res=>
      console.log(res));
  }
  ngOnInit(){

  }
  apply(item,job){
    this.db.list('/company/'+item.name+'/candidatesApplied').push(
      {name:"shubham",jobTitle:job.jobTitle}
    )
    console.log(item.name,job.jobTitle);
  }
}

 
  