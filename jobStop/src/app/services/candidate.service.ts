import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})

export class CandidateService {
  candidateData;
  constructor(private db1: AngularFireDatabase, private session: SessionStorageService) { }
  async CandidateData(data) {
    console.log("inside service" + data)
    this.candidateData = await data;
    await this.session.store('candidate', data);
    this.db1.database.ref('/candidate/' + this.session.retrieve('user')[0].uid).set(data)
    // await this.db1.list('/candidate').push(this.candidateData)
  }

  // async UpdateCandidateData(data) {
  //   console.log("new project" + JSON.stringify(data))
  //   this.candidateData = await data;
  //   var project = this.session.retrieve('candidate')
  //   project.projects.push(data[0])
  //   console.log((project.projects))
  //   await this.session.store('candidate', project);
  //   this.db1.database.ref('/candidate/' + this.session.retrieve('user')[0].uid).set(project)
  //   // await this.db2.list('/company').push(job)
  // }
}
