import { Injectable } from '@angular/core';
import { SessionStorageService,LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
uid;
  userData;
  constructor(private session: SessionStorageService) { }

 async UserData(data) {
  
   this.userData = await data;
   this.session.store('user',data);
    console.log(this.session.retrieve('user')[0].uid);
  }

  Uid(){
      return this.session.retrieve('user')
  }
}
