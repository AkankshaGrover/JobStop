import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CompanyService } from "../services/company.service";
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
  constructor(private db: AngularFireDatabase, private session: SessionStorageService,private companyService:CompanyService) {
    this.items = db.list('company/' + session.retrieve('user')[0].uid + '/candidatesApplied').valueChanges();
    this.items.subscribe(res =>
      console.log(res));
      this.companyService.setData();

  }
  ngOnInit() { }

  call(candidateid) {
    console.log(this.session.retrieve('user')[0].uid)
    this.db.database.ref('/company/' + this.session.retrieve('user')[0].uid + '/status/shortlisted').push({ 'uid': candidateid })
  }
  reject(candidateid) {
    console.log(this.session.retrieve('user')[0].uid)
    this.db.database.ref('/company/' + this.session.retrieve('user')[0].uid + '/status/rejected').push({ 'uid': candidateid })
  }
}
