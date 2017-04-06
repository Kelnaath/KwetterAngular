/**
 * Created by mvdve on 4-4-2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./User";
import {UserService} from "./user.service";

@Injectable()
export class AuthService{

  private baseUrl = 'http://localhost:8080/kwetter/api';
  private loggedIn = false;
  private token : string;

  constructor(private http: Http, private userService: UserService){}

  /*
   login(username, password) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');

   return this.http
   .post('http://localhost:8080/kwetter/new/auth/login/' + username + "/" + password, JSON.stringify({username, password}), {headers})
   .subscribe(
   response => {
   localStorage.setItem('token', response.headers.get('authorization'));
   this.token = localStorage.getItem('token');
   console.log(response.headers.get("authorization"));
   this.loggedIn = true;
   },
   error => {
   alert(error.text());
   console.log(error.text());
   }
   );
   }

   logout(){
   localStorage.removeItem('auth_token');
   this.loggedIn = false;
   }

   isLoggedIn(){
   return this.loggedIn;
   }
   */

  tempLogin(username, password): Observable<User>{
    return this.userService.getUser(username);

  }
}
