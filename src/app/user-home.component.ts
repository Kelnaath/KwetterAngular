/**
 * Created by mvdve on 6-4-2017.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {Kweet} from "./Kweet";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "./User";
import {WebsocketService} from "./websocket.service";
import {Subject} from "rxjs";

@Component({
  selector: 'user-home',
  templateUrl: `./user-home.component.html`,
  styleUrls:['./user.profile.component.css']
})

export class UserHomeComponent implements OnInit, OnDestroy {

  newKweet : string = "";
  timeline : Kweet[];
  following : User[];
  followers : User[];

  kweets : Kweet[];

  avatarsToDisplay : number = 5;
  charactersLeft: number = 140;

  constructor(private userService : UserService, private route: ActivatedRoute, private login: AuthService){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getUserDetails(this.login.loggedUser.username);
    });

    this.userService.kweets.subscribe( kweet => {
      this.kweets.push(kweet);
    });
  }

  ngOnDestroy(): void {

  }

  getUserDetails(username){
    //Get user
    this.userService.getUser(username).subscribe( user =>{
      this.userService.getUserTimeline(user.id).subscribe( timeline => {
        this.timeline = timeline;
      });
      this.userService.getUserList(user.following).subscribe( following => this.following = this.formatUserlist(following));
      this.userService.getUserList(user.followers).subscribe( followers => this.followers = this.formatUserlist(followers));
      this.userService.getUserKweetsList(user.id).subscribe( userkweets => this.kweets = userkweets);
    })
  }

  getLoggedUser(){
    return this.login.loggedUser;
  }

  postNewKweet(){
    let kweet : Kweet = new Kweet;
    kweet.message = this.newKweet;
    kweet.ownerId = this.login.loggedUser.id;
    kweet.id = 0;

    this.userService.postKweet(kweet).subscribe(kweet =>{
      this.getUserDetails(this.login.loggedUser.username);
      this.newKweet = "";
    });
  }

  formatUserlist(users : User[]){
    if(users.length > this.avatarsToDisplay)
      return users.slice(1, this.avatarsToDisplay);
    else
      return users;
  }

  send(){
    this.userService.socketKweet(this.newKweet, this.login.loggedUser.id);

    this.postNewKweet();

  }

  calculateCharactersLeft() : number{
    return this.charactersLeft - this.newKweet.length;
  }
}
