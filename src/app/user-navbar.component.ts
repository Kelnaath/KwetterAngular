/**
 * Created by mvdve on 6-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'user-navbar',
  templateUrl: `./user-navbar.component.html`
})

export class UserNavbar implements OnInit{

  user : User;

  constructor(private authService:AuthService){}

  ngOnInit():void{
    this.user = this.authService.loggedUser;
  }

}
