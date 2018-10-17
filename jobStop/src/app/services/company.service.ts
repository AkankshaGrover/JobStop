import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from "../services/user.service";
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {



  companyData;
  constructor(private db2: AngularFireDatabase, private session: SessionStorageService, private userService: UserService) { }

  setData(){
    let scope = this;
    var starCountRef = scope.db2.database.ref('/company/' +this.session.retrieve('user')[0].uid);
        starCountRef.on('value', function (snapshot) {
         scope.session.store('company', snapshot.val());
        })
  }

  
  async CompanyData(data) {
    console.log(data)
    this.companyData = await data;
    await this.session.store('company', data);
    // this.sendData();
    // await this.db2.list('/company').push(this.companyData)
    this.db2.database.ref('/company/' + this.session.retrieve('user')[0].uid).set(data)
  }
  // async sendData(){
    
  //   await this.db2.list('/company').push(this.session.retrieve('company'))
  // }

  async UpdateCompanyData(data) {
    console.log("new job"+JSON.stringify(data))
    this.companyData = await data;
    var jobTitle
    var job = this.session.retrieve('company')
    for(var i of data)
    {
      console.log(i.jobtitle)
      jobTitle=i.jobtitle
      // job.jobs.push([i.jobdetail:i])  
      // job.jobs.push(i)  
      this.db2.database.ref('/company/' + this.session.retrieve('user')[0].uid+'/jobs/'+jobTitle+'/').set(i)
    }
    this.setData();
    // console.log((job.jobs))
    console.log(job)
    await this.session.store('company', job);
    // this.sendData();
    // await this.db2.ref('/company/' + this.session.retrieve('user')[0].uid).set(job)
    
  }

  
}
