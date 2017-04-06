import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from "./user.service";
import {LoginComponent} from "./login.component";
import {AuthService} from "./auth.service";
import {UserProfile} from "./user.profile.component";
import {RouterModule} from "@angular/router";

export const routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'user-profile/:username', component: UserProfile}
  //{path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfile
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
