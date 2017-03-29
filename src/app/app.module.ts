import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoggedUser} from "./logged-user.component";
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    LoggedUser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
