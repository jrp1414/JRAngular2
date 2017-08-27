import {Injectable} from "@angular/core"
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser:IUser;
    logIn(userName:string,password:string):void{
        this.currentUser = {
            id:1,userName:userName,firstName:"Ram",lastName:"Sharma"
        };
    }

    UpdateCurrentUser(firstName:string,lastName:string):void{
        this.currentUser.firstName =firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
    }
}