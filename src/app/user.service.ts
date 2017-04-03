/**
 * Created by mvdve on 28-3-2017.
 */

import {Injectable} from "@angular/core";
import {User} from "./User";
import {Http, Response, Headers} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{

  private baseUrl = 'http://localhost:8080/kwetter/api';
  private loggedIn = false;
  private token : string;

  constructor(private http: Http){
    this.loggedIn = !!localStorage.getItem('token');
  }

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

  getUser() : Observable<User>{

    //return this.http.get(this.baseUrl + '/users' + '/name' + '/admin').map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8080/kwetter/api/users/name/admin').map((res:Response) => res.json());
  }
}
