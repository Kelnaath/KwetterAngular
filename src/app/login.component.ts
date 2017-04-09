/**
 * Created by mvdve on 3-4-2017.
 */
import {Component, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";
import {User} from "./User";


@Component({
  selector: 'authenticate',
  templateUrl: `./login.component.html`
})

export class LoginComponent {

  username : string;
  password : string;

  user : User;

  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit(username, password) {

    this.authService.authenticate(username, password).subscribe(auth =>{
      console.log(auth);
      if(auth === true){
        this.authService.login(username, password).subscribe(user => {
          this.user = user;
          this.goToProfile();
        })
      }
    });
  }

  goToProfile(){
    if(this.user != null){
      this.authService.loggedUser = this.user;
      this.router.navigate(['./user-profile', this.user.username]);
    }
  }
}
