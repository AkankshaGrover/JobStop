import { Injectable } from '@angular/core';
import { SessionStorageService,LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  userData;
  constructor(private session: SessionStorageService) { }

 async UserData(data) {
    console.log(data);
   this.userData = await data;
   this.session.store('user',data);
  }
}
