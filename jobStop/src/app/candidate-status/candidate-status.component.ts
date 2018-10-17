import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SessionStorageService } from 'ngx-webstorage';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-candidate-status',
  templateUrl: './candidate-status.component.html',
  styleUrls: ['./candidate-status.component.css']
})
export class CandidateStatusComponent implements OnInit {

  items: Observable<any[]>;
  companies=[];
  constructor(private db: AngularFireDatabase, private session: SessionStorageService, private cdr: ChangeDetectorRef) {
  }

  async ngOnInit() {
    let scope = this;
    scope.items = scope.db.list('candidate/' + scope.session.retrieve('user')[0].uid + '/companiesApplied').valueChanges();
    scope.items.subscribe(res => {
      console.log(res)
      let temp;
      res.forEach(elem => {

        // let temp=scope.db.list('/candidate/'+elem.uid+'/').valueChanges();
        // temp.subscribe(data=>{
        // console.log(elem.uid)
        // scope.candidates.push(data);
        // })
        if(temp!=elem.uid){
        var starCountRef = scope.db.database.ref('/company/' + elem.uid);
        starCountRef.on('value', function (snapshot) {
          scope.companies.push(snapshot.val());
          temp=elem.uid;
        })
       }
       scope.cdr.detectChanges();
      })
    })
    console.log(scope.companies); 
  }

}
