/**
 * Created by mvdve on 4-4-2017.
 */

import {Component, OnInit, Input} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Kweet} from "./Kweet";
import {Observable} from "rxjs";

@Component({
  selector: 'user-profile',
  templateUrl: `./user.profile.component.html`
})

export class UserProfile implements OnInit{

  user : User;
  followers : User[] = [];
  following : User[] = [];
  kweets : Kweet[] = [];

  constructor(private userService:UserService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    //Get user
    this.route.params.subscribe(params => {
      this.userService.getUser(params['username']).subscribe( user =>{
        this.user = user;
        console.log(this.user);
        this.userService.getUserList(this.user.following).subscribe( following => this.following = following);
        this.userService.getUserList(this.user.followers).subscribe(followers => this.followers = followers);
        this.userService.getUserKweetsList(this.user.id).subscribe(kweets => this.kweets = kweets);
      })
    });
  }
}
