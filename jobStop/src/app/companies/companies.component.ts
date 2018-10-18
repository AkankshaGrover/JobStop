import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserService } from "../services/user.service";
import { SessionStorageService } from 'ngx-webstorage';
import { AlertsService } from 'angular-alert-module'


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  items: Observable<any[]>;
  // item: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private session: SessionStorageService, private userService: UserService, private alerts: AlertsService) {
    this.items = db.list('company/').valueChanges();
    this.items.subscribe(res =>
      console.log(res)
      );

    // db.database.ref('company/').orderByKey();
    // this.item.subscribe(res =>
    //   console.log(res));
  }
  ngOnInit() {
  }
  apply(item, jobtitle, i) {
    console.log(item.uid)
    this.session.retrieve('user');
    this.db.database.ref('/company/' + item.uid + '/jobs/'+jobtitle+'/candidatesApplied/').push({ 'uid':  this.session.retrieve('user')[0].uid})
    this.db.database.ref('/candidate/' + this.session.retrieve('user')[0].uid + '/companiesApplied').push({ 'uid': item.uid, 'jobtitle':jobtitle })
    this.alerts.setMessage('Applied!', 'success');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('success', 'icon', 'check')
  }
}



