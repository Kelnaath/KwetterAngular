/**
 * Created by mvdve on 6-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user-navbar',
  templateUrl: `./user-navbar.component.html`
})

export class UserNavbar implements OnInit{

  user : User;

  constructor(private authService:AuthService, private router: Router){}

  ngOnInit():void{
    this.user = this.authService.loggedUser;
  }

  isAdmin() : boolean{
    return this.authService.isAdmin();
  }

  logout(){
    this.router.navigate(['./authenticate']);
  }
}
