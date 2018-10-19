import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserService } from "../services/user.service";
import { SessionStorageService } from 'ngx-webstorage';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  items: Observable<any[]>;
  // item: Observable<any[]>;
  constructor(private cdr: ChangeDetectorRef,private db: AngularFireDatabase, private session: SessionStorageService, private userService: UserService,  private alerts: AlertsService) {

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
    let count=0;
    let scope=this;
    console.log(item.uid)
    let temp=this.db.list('/company/' + item.uid + '/jobs/'+jobtitle+'/candidatesApplied/').valueChanges();
    temp.subscribe(res=>{
      
      res.forEach(element => {
      if(element['uid']==this.session.retrieve('user')[0].uid)
       {count++;}
      })
      if(count==0)
      {
       this.db.database.ref('/company/' + item.uid + '/jobs/'+jobtitle+'/candidatesApplied/').push({ 'uid':  this.session.retrieve('user')[0].uid})
       this.db.database.ref('/candidate/' + this.session.retrieve('user')[0].uid + '/companiesApplied').push({ 'uid': item.uid, 'jobtitle':jobtitle })
       this.alerts.setMessage('Applied!', 'success');
        this.alerts.setDefaults('timeout', 2);
        this.alerts.setConfig('success', 'icon', 'check')
       count=0; 
       scope.cdr.detectChanges();
      }
  })
  
    // this.session.retrieve('user');
  }
}

