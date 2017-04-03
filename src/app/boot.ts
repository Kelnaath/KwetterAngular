/**
 * Created by mvdve on 3-4-2017.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {UserService} from "./user.service";
import {LoggedInGuard} from "./logged-in.guard";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, LoggedInGuard]
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
