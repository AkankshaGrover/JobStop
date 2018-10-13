import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyData;
  constructor(private db2: AngularFireDatabase, private session: SessionStorageService,private userService:UserService) { }

  async CompanyData(data) {
    console.log(data)
    this.companyData = await data;
    await this.session.store('company', data);
    await this.db2.list('/company').push(this.companyData)
  }

  async UpdateCompanyData(data) {
    console.log("new job"+JSON.stringify(data))
    this.companyData = await data;
    var job = this.session.retrieve('company')
    job.jobs.push(data[0])
    console.log((job.jobs))
    await this.session.store('company', job);
    // await this.db2.list('/company').push(job)
    this.db2.database.ref('/company/'+this.session.retrieve('user')[0].uid).set(job)
  }
}
