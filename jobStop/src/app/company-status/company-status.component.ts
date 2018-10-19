import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-company-status',
  templateUrl: './company-status.component.html',
  styleUrls: ['./company-status.component.css']
})
export class CompanyStatusComponent implements OnInit {
  items: Observable<any[]>;
  candidates = [];
  constructor(private db: AngularFireDatabase, private session: SessionStorageService, private cdr: ChangeDetectorRef) {

  }
  
  async ngOnInit() {
    let scope = this;
    scope.items = scope.db.list('company/' + scope.session.retrieve('user')[0].uid + '/status/shortlisted').valueChanges();
    scope.items.subscribe(res => {
      res.forEach(elem => {
        // let temp=scope.db.list('/candidate/'+elem.uid+'/').valueChanges();
        // temp.subscribe(data=>{
        console.log(elem.uid)
        // scope.candidates.push(data);
        // })
        var starCountRef = scope.db.database.ref('/candidate/' + elem.uid);
        starCountRef.on('value', function (snapshot) {
          scope.candidates.push(snapshot.val());
          scope.cdr.detectChanges();
        });
      })
    })
    console.log(scope.candidates);
  }
}


