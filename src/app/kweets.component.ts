/**
 * Created by mvdve on 7-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {Kweet} from "./Kweet";
import {UserService} from "./user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";
import {User} from "./User";

@Component({
  selector: 'kweets',
  templateUrl: `./kweets.component.html`,
  styleUrls:['./user.profile.component.css']
})

export class KweetComponent implements OnInit {

  sub : any;
  kweets : Kweet[];
  user : User;

  constructor(private userService:UserService, private route: ActivatedRoute, private login: AuthService){}

  ngOnInit(){
    this.getKweets();
  }

  getKweets(){
    this.sub = this.route.parent.params.subscribe(params =>{
      let username = params['username'];
      this.userService.getUser(username).subscribe( user => {
        this.user = user;
        this.userService.getUserKweetsList(this.user.id).subscribe( k => this.kweets = k);
      })
    });

    console.log('got kweets');
  }
}
