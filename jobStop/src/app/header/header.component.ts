import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private signout: LoginComponent, private userService: UserService) { }

  ngOnInit() {
  }

  logout1()
  {
    this.userService.logout();
    console.log("logout clicked");
  }
}
