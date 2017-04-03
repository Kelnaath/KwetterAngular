/**
 * Created by mvdve on 28-3-2017.
 */

import {Component} from "@angular/core";

import {User} from "./User";
import {UserService} from "./user.service";

@Component({
  selector: 'logged-user',
  templateUrl: './logged-user.component.html'
})

export class LoggedUser{
  errorMessage : string;
  loggedUser : User;
  returnJson : string;

  constructor(private userService : UserService){

  }

  dummyLogin() : void{
    this.userService.getUser().subscribe(user => this.loggedUser = user);
  }


}
