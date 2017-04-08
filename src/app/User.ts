import {Kweet} from "./Kweet";
import {Profile} from "./Profile";
import {Group} from "./Group";
/**
 * Created by mvdve on 28-3-2017.
 */

export class User{
  id : number;
  name : string;
  username : string;
  followers : number[];
  following : number[];
  groups : Group[];
  kweets : number[];
  profile : Profile;
}
