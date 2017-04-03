import {Kweet} from "./Kweet";
/**
 * Created by mvdve on 28-3-2017.
 */

export class User{
  id : number;
  name : string;
  username : string;
  followers : User[];
  following : User[];
  kweets : Kweet[];
}
