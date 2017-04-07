/**
 * Created by mvdve on 4-4-2017.
 */

import {Component, OnInit, Input, ApplicationRef} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Kweet} from "./Kweet";
import {Observable} from "rxjs";
import {LoginComponent} from "./login.component";
import {AuthService} from "./auth.service";
import {isNullOrUndefined} from "util";
import {Profile} from "./Profile";

@Component({
  selector: 'user-profile',
  templateUrl: `./user.profile.component.html`,
  styleUrls:['./user.profile.component.css']
})

export class UserProfile implements OnInit{

  user : User;
  canFollow : boolean;
  canUnfollow : boolean;
  canEdit : boolean;
  followers : User[] = [];

  kweets : Kweet[] = [];

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router, private login: AuthService){}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    //Get user
    this.route.params.subscribe(params => {
      this.userService.getUser(params['username']).subscribe( user =>{
        this.user = user;
        this.canFollow = this.canFollowMethod(this.login.loggedUser.id);
        this.canUnfollow = this.canUnfollowMethod(this.login.loggedUser.id);
        this.canEdit = this.canEditMethod();
      })
    });
  }

  getLoggedUser(){
    return this.login.loggedUser;
  }

  gotoUser(username){
    this.userService.gotoUser(username);
    console.log("Currently logged user = " + this.login.loggedUser.username);
  }

  //ToDo: Dumb method, fix it!
  canFollowMethod(userId : number) : boolean {
    //If user is the same as the logged user.
    if(userId === this.user.id)
      return false;

    //If user is already being followed by user.
    if (this.user.followers.find( u => u === userId)){
      return false;
    }

    return true;
  }

  //ToDo: For each dumb method i write, God kills a kitten. :(
  canUnfollowMethod(userId : number) : boolean {
    //If user is the same as the logged user.
    if(userId === this.user.id)
      return false;

    //If user is already being followed.
    if (this.user.followers.find( u => u === userId)){
      return true;
    }

    return false;
  }

  canEditMethod() : boolean{
    if(!this.login.loggedUser)
      return false;

    if(this.user.id === this.login.loggedUser.id)
      return true;

    return false;
  }

  followUser(user : User){
    this.userService.followUser(this.login.loggedUser.id, user.id).subscribe(u =>{
      this.getUserDetails();
    })
  }

  unfollowUser(user : User){
    this.userService.unfollowUser(this.login.loggedUser.id, user.id).subscribe(u =>{
      this.getUserDetails();
    })
  }

  updateProfile(profile : Profile){
    this.userService.updateProfile(profile).subscribe( u =>{
      this.getUserDetails();
    })
  }
}
