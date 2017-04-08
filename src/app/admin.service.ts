/**
 * Created by mvdve on 8-4-2017.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "./User";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Kweet} from "./Kweet";
import {Group} from "./Group";

@Injectable()
export class AdminService{

  constructor(private http: Http){

  }

  getAllUsers() : Observable<User[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("getting all users");
    return this.http.get('http://localhost:8080/kwetter/api/users', options).map((res:Response) => res.json());
  }

  getAllKweets() : Observable<Kweet[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("getting all kweets");
    return this.http.get('http://localhost:8080/kwetter/api/kweets', options).map((res:Response) => res.json());
  }

  makeUserAdmin(userId : number) : Observable<User>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let group : Group = new Group;
    group.id = 0;
    group.groupName = 'administrator';

    console.log("assigning role");
    return this.http.put('http://localhost:8080/kwetter/api/users/role/' + userId,JSON.stringify(group), options).map((res:Response) => res.json());
  }

  deleteKweet(kweetId : number) : Observable<Kweet>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("deleting kweet");
    return this.http.delete('http://localhost:8080/kwetter/api/kweets/' + kweetId, options).map((res:Response) => res.json());
  }
}
