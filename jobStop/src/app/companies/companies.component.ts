import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {SessionStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase,private session:SessionStorageService) {
    this.items = db.list('company/').valueChanges();
    this.items.subscribe(res=>
      console.log(res));
  }
  ngOnInit(){

  }
  userId='106615614629915533660'
  apply(item,job,i){
    this.session.retrieve('user');
    // let ref=this.db.list('/company/'+106615614629915533660+'/candidatesApplied').push(
    //   {name:"shubham",jobTitle:job.jobtitle}
    // )
    this.db.database.ref('/company/'+this.userId+'/candidatesApplied').push( {name:"akanksha",jobTitle:job.jobtitle})
    // .set(
    //   {name:"inderjot",jobTitle:job.jobtitle}
    // )
    // let key=ref.key;
    // console.log(key);
  }
}

 
  