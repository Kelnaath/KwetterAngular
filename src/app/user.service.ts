/**
 * Created by mvdve on 28-3-2017.
 */

import {Injectable} from "@angular/core";
import {User} from "./User";
import {Http, Response} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{

  private baseUrl = 'http://localhost:8080/kwetter/api';



  constructor(private http: Http){}

  getUser() : Observable<User>{

    //return this.http.get(this.baseUrl + '/users' + '/name' + '/admin').map(this.extractData).catch(this.handleError);
    return this.http.get('http://localhost:8080/kwetter/api/users/name/admin').map((res:Response) => res.json());
  }
}
