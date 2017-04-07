import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from "./user.service";
import {LoginComponent} from "./login.component";
import {AuthService} from "./auth.service";
import {RouterModule} from "@angular/router";
import {UserNavbar} from "./user-navbar.component";
import {UserProfile} from "./user.profile.component";
import {Following} from "./following.component";
import {Followers} from "./followers.component";
import {KweetComponent} from "./kweets.component";

export const routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'user-profile/:username', component: UserProfile,
  children: [
    {path: 'following', component: Following},
    {path: 'followers', component: Followers},
    {path: 'kweets', component: KweetComponent}
    ]
  }
  //{path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfile,
    Following,
    Followers,
    KweetComponent,
    UserNavbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, AuthService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
