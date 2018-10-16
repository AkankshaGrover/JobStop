import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from "../services/user.service";
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private signout: LoginComponent, private userService: UserService, private session: SessionStorageService) { }

  // user = this.session.retrieve('user')[0].displayname;
  ngOnInit() {
  }

  logout1()
  {
    this.userService.logout();
    console.log("logout clicked");
  }
}
