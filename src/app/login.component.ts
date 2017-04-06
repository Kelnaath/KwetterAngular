/**
 * Created by mvdve on 3-4-2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";
import {User} from "./User";


@Component({
  selector: 'login',
  templateUrl: `./login.component.html`
})
export class LoginComponent {

  username : string;
  password : string;

  user : User;

  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit(username, password) {

    this.authService.tempLogin(username, password).subscribe(user => this.user = user);

    if(this.user != null){
      this.router.navigate(['./user-profile', this.user.name]);
    }
  }
}
