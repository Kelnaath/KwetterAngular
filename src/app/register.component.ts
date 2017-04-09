/**
 * Created by mvdve on 8-4-2017.
 */

import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {User} from "./User";
import {NewUser} from "./NewUser";

@Component({
  selector: 'register',
  templateUrl: `./register.component.html`
})

export class RegisterComponent{

  name : string;
  username : string;
  password : string;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router){}

  registerUser(){
    let newUser : NewUser = new NewUser;

    newUser.name = this.name;
    newUser.username = this.username;
    newUser.password = this.password;

    this.userService.registerUser(newUser).subscribe(user => {
      this.redirectToLogin();
    })
  }

  redirectToLogin(){
    this.router.navigate(['./authenticate']);
  }
}
