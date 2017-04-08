/**
 * Created by mvdve on 8-4-2017.
 */

import {Component, OnInit} from "@angular/core";
import {Kweet} from "./Kweet";
import {User} from "./User";
import {AuthService} from "./auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "./user.service";
import {AdminService} from "./admin.service";

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls:['./user.profile.component.css']
})

export class AdminPanelComponent implements OnInit{

  kweets : Kweet[];
  users : User[];

  constructor(private userService:UserService, private route: ActivatedRoute, private adminService:AdminService, private login: AuthService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getAdminDetails();
    });
  }

  getAdminDetails(){
    this.userService.getUser(this.login.loggedUser.username).subscribe( user =>{
      this.adminService.getAllUsers().subscribe( users => this.users = users);
      this.adminService.getAllKweets().subscribe( kweets => this.kweets = kweets);
    })
  }

  makeUserAdmin(userId : number){
    this.adminService.makeUserAdmin(userId).subscribe( user =>{
      this.adminService.getAllUsers().subscribe( users => this.users = users);
    })
  }

  deleteKweet(kweetId : number){
    this.adminService.deleteKweet(kweetId).subscribe( kweet =>{
      this.adminService.getAllKweets().subscribe( kweets => this.kweets = kweets);
    })
  }

  isAdmin(user : User) : boolean{
    if(user.groups.find( group => group.groupName === 'administrator'))
      return true;
    return false;
  }
}
