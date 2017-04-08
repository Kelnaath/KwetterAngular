/**
 * Created by mvdve on 28-3-2017.
 */

import {Injectable} from "@angular/core";
import {User} from "./User";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Kweet} from "./Kweet";
import {Router} from "@angular/router";
import {Profile} from "./Profile";


@Injectable()
export class UserService{

  private baseUrl = 'http://localhost:8080/kwetter/api';
  public viewedUser : User;
  private loggedIn = false;
  private token : string;

  constructor(private http: Http, private router: Router){
    this.loggedIn = !!localStorage.getItem('token');
  }

  gotoUser(username){
    this.getUser(username).subscribe(user =>{
      this.router.navigate(['./user-profile', user.username]);
    });
  }

  getUser(username) : Observable<User>{

    //return this.http.get(this.baseUrl + '/users' + '/name' + '/admin').map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8080/kwetter/api/users/name/'+username).map((res:Response) => res.json());
  }

  getUserById(id) : Observable<User>{
    //return this.http.get(this.baseUrl + '/users' + '/name' + '/admin').map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8080/kwetter/api/users/'+id).map((res:Response) => res.json());
  }

  getUserList(userIds : number[]) : Observable<User[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("getting userlist");
    return this.http.put('http://localhost:8080/kwetter/api/users/list', JSON.stringify(userIds), options).map((res:Response) => res.json());
  }

  getUserKweetsList(userId : number) : Observable<Kweet[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("getting kweetlist");
    return this.http.get('http://localhost:8080/kwetter/api/kweets/user/' + userId, options).map((res:Response) => res.json());
  }

  getUserTimeline(userId : number) : Observable<Kweet[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("getting timeline");
    return this.http.get('http://localhost:8080/kwetter/api/kweets/user/timeline/' + userId, options).map((res:Response) => res.json());
  }

  postKweet(kweet : Kweet) : Observable<Kweet>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("post kweet");
    return this.http.post('http://localhost:8080/kwetter/api/kweets', JSON.stringify(kweet), options).map((res:Response) => res.json());
  }

  followUser(baseUserId : number, followingId : number) : Observable<User>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("following user");
    return this.http.put('http://localhost:8080/kwetter/api/users/follow/'+baseUserId + "/" + followingId, options).map((res:Response) => res.json());
  }

  unfollowUser(baseUserId : number, followingId : number) : Observable<User>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("unfollowing user");
    return this.http.put('http://localhost:8080/kwetter/api/users/unfollow/'+baseUserId + "/" + followingId, options).map((res:Response) => res.json());
  }

  updateProfile(profile : Profile) : Observable<User>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("updating user profile");
    return this.http.put('http://localhost:8080/kwetter/api/users/profile/' + profile.owner,JSON.stringify(profile), options).map((res:Response) => res.json());
  }
}
