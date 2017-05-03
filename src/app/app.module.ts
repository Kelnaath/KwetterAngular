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
import {UserHomeComponent} from "./user-home.component";
import {RegisterComponent} from "./register.component";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminService} from "./admin.service";
import {WebsocketService} from "./websocket.service";

export const routes = [
  {path: 'authenticate', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: '', redirectTo: '/authenticate', pathMatch: 'full'},
  {path: 'user-profile/:username', component: UserProfile,
  children: [
    {path: 'following', component: Following},
    {path: 'followers', component: Followers},
    {path: 'kweets', component: KweetComponent}
    ]
  },
  {path: 'user-home', component: UserHomeComponent}
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
    UserNavbar,
    UserHomeComponent,
    RegisterComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, AuthService, LoginComponent, AdminService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
