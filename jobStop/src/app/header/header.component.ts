import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from "../services/user.service";
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
us:string;
  constructor(private cdr: ChangeDetectorRef,private signout: LoginComponent, private userService: UserService, private session: SessionStorageService) { 
   this.us=this.userService.userName();
   let scope=this
    console.log(this.us);

    // this.cdr.detectChanges();
  }

  
  ngOnInit() {
  }

  logout1()
  {
    this.userService.logout();
    console.log("logout clicked");
  }
}
