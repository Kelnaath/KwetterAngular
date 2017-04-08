/**
 * Created by mvdve on 7-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls:['./user.profile.component.css']
})

export class Followers implements OnInit{

  sub : any;
  followers : User[] = [];

  constructor(private userService:UserService, private route: ActivatedRoute, private login: AuthService){}

  ngOnInit(){
    this.getFollowers();
  }

  getViewedUser(){
    return this.userService.viewedUser;
  }

  getFollowers(){
    this.sub = this.route.parent.params.subscribe(params =>{
      let username = params['username'];
      this.userService.getUser(username).subscribe( user => {
        this.userService.getUserList(this.userService.viewedUser.followers).subscribe( followers => this.followers = followers);
      })
    });

    console.log('got followers');
  }

  gotoUser(username){
    this.userService.gotoUser(username);
    console.log("Currently logged user = " + this.login.loggedUser.username);
  }
}
