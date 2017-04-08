/**
 * Created by mvdve on 7-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'following',
  templateUrl: './following.component.html',
  styleUrls:['./user.profile.component.css']
})

export class Following implements OnInit{

  sub : any;
  following : User[] = [];

  constructor(private userService:UserService, private route: ActivatedRoute, private login: AuthService){}

  ngOnInit(){
    this.getFollowing();
  }

  getViewedUser(){
    return this.userService.viewedUser;
  }

  getFollowing(){
    this.sub = this.route.parent.params.subscribe(params =>{
      let username = params['username'];
      this.userService.getUser(username).subscribe( user => {
        this.userService.getUserList(this.userService.viewedUser.following).subscribe( following => this.following = following);
      })
    });

    console.log('got following');
  }

  gotoUser(username){
    this.userService.gotoUser(username);
    console.log("Currently logged user = " + this.login.loggedUser.username);
  }
}
