import {NgModule} from "@angular/core"
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./userRoutes";
import { ProfileComponent } from "./profile.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LogInComponent } from "./login.component";
import { UserSignUpComponent } from "./user_signup.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LogInComponent,
        UserSignUpComponent
    ],
    providers:[]
})
export class UserModule{

}