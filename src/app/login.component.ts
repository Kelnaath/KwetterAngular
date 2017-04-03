/**
 * Created by mvdve on 3-4-2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`
})
export class LoginComponent {
  constructor(private userService: UserService/*, private router: Router*/) {}

  onSubmit(username, password) {
    this.userService.login(username, password);
  }
}
