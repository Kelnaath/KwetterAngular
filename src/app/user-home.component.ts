/**
 * Created by mvdve on 6-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {Kweet} from "./Kweet";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'user-home',
  templateUrl: `./user.home.component.html`,
  styleUrls:['./user.profile.component.css']
})

export class UserHomeComponent implements OnInit{

  newKweet : string;
  timeline : Kweet[];

  constructor(private userService : UserService, private route: ActivatedRoute, private router: Router, private login: AuthService){}

  ngOnInit(): void {

  }
}
