import {Component,
  OnInit,
  ChangeDetectorRef} from '@angular/core';
import {
  AngularFireDatabase
} from '@angular/fire/database';
import {
  Observable
} from 'rxjs';
import {
  CompanyService
} from "../services/company.service";
import {
  HeaderComponent
} from '../header/header.component';
import {
  FooterComponent
} from '../footer/footer.component';
import {
  SessionStorageService
} from 'ngx-webstorage';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  items = [];
  jobs;

  constructor(private db: AngularFireDatabase, private session: SessionStorageService, private companyService: CompanyService, private cdr: ChangeDetectorRef, private alerts: AlertsService) {
    let scope = this;
    // this.items = db.list('company/' + session.retrieve('user')[0].uid + '/candidatesApplied').valueChanges();
    // this.items.subscribe(res =>
    //   console.log(res));

    var starCountRef = scope.db.database.ref('/company/' + session.retrieve('user')[0].uid + '/jobs');
    starCountRef.on('value', function (snapshot) {
      let temp = Object.keys(snapshot.val())
      scope.jobs = temp;
      console.log((scope.jobs))
      scope.cdr.detectChanges();
    })
    this.companyService.setData();
  }
  ngOnInit() { }

  onSelect($event) {
    let scope = this
    scope.items = [];
    scope.db.list('company/' + scope.session.retrieve('user')[0].uid + '/jobs/' + $event.target.value + '/candidatesApplied').valueChanges().subscribe(data => {
      // console.log(data)
      data.forEach(elem => {
        // console.log(elem.uid)

        var starCountRef = scope.db.database.ref('candidate/' + elem['uid'] + '/');
        starCountRef.on('value', function (snapshot) {
          console.log(snapshot.val())
          scope.items.push(snapshot.val())
          scope.cdr.detectChanges();
        })
        //  scope.db.list('candidate/'+elem.uid ).valueChanges().subscribe(res=> scope.items.push(res));
      })
    })
    console.log(scope.items)
  }
  call(candidateid) {
    console.log(this.session.retrieve('user')[0].uid)
    this.db.database.ref('/company/' + this.session.retrieve('user')[0].uid + '/status/shortlisted').push({
      'uid': candidateid
    })
    this.alerts.setMessage('Data saved successfully', 'success');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('success', 'icon', 'check')
  }
  reject(candidateid) {
    console.log(this.session.retrieve('user')[0].uid)
    this.db.database.ref('/company/' + this.session.retrieve('user')[0].uid + '/status/rejected').push({
      'uid': candidateid
    })
    this.alerts.setMessage('Data saved successfully', 'success');
    this.alerts.setDefaults('timeout', 2);
    this.alerts.setConfig('success', 'icon', 'check')
  }
}
