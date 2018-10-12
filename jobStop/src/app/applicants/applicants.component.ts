import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('candidate').valueChanges();
    this.items.subscribe(res=>
      console.log(res));
  }
  ngOnInit() {}

}
