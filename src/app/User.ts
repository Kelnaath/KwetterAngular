import {Kweet} from "./Kweet";
import {Profile} from "./Profile";
/**
 * Created by mvdve on 28-3-2017.
 */

export class User{
  id : number;
  name : string;
  username : string;
  followers : number[];
  following : number[];
  kweets : number[];
  profile : Profile;
}
