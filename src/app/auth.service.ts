/**
 * Created by mvdve on 4-4-2017.
 */

import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./User";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:8080/kwetter/api';
  private loggedIn = false;
  public loggedUser: User;
  private token: string;

  constructor(private http: Http, private userService: UserService) {
  }

  authenticate(username, password){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('http://localhost:8080/kwetter/new/auth/authenticate/' + username + "/" + password, JSON.stringify({username,password}), options)
      .map(response => {
          localStorage.setItem('token', response.headers.get('authorization'));
          this.token = localStorage.getItem('token');
          console.log(response.headers.get("authorization"));
          this.loggedIn = true;
          console.log(this.loggedIn);
        return true;

        },
        error => {
          alert(error.text());
          console.log(error.text());
          return false;
        }
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login(username, password): Observable<User> {
    this.userService.connectToSocket(username);
    return this.userService.getUser(username);
  }

  isAdmin(): boolean {
    if (this.loggedUser.groups.find(group => group.groupName === 'administrator'))
      return true;
    return false;
  }
}
