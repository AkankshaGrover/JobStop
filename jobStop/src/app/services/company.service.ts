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

  async CompanyData(data) {
    console.log(data)
    this.companyData = await data;
    await this.session.store('company', data);
    // this.sendData();
    // await this.db2.list('/company').push(this.companyData)
  }
  // async sendData(){
    
  //   await this.db2.list('/company').push(this.session.retrieve('company'))
  // }

  async UpdateCompanyData(data) {
    console.log("new job"+JSON.stringify(data))
    this.companyData = await data;
    var job = this.session.retrieve('company')
    for(var i of data)
    {
      console.log(i)
      job.jobs.push(i)  
    }
    console.log((job.jobs))
    await this.session.store('company', job);
    // this.sendData();
    // await this.db2.ref('/company/' + this.session.retrieve('user')[0].uid).set(job)
    this.db2.database.ref('/company/' + this.session.retrieve('user')[0].uid).set(job)
  }

  
}
