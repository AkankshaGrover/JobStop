import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userData;
  constructor() { }

 async UserData(data) {
    console.log(data)
   this.userData = await data;
    
  }
}
