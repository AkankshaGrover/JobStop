import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase, session: SessionStorageService) {
    this.items = db.list('company/'+session.retrieve('user')[0].uid +'/candidatesApplied').valueChanges();
    this.items.subscribe(res=>
      console.log(res));
  }
  ngOnInit() {}

}
