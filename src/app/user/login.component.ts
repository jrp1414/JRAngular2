import { Component } from "@angular/core"
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: "login.component.html"
})
export class LogInComponent {
    constructor(private auth:AuthService,private router:Router){

    }
    login(loginFormValues: any): void {
        console.log(loginFormValues);
        this.auth.logIn(loginFormValues.value.UserName,loginFormValues.value.Password);
        this.router.navigate(["/products"]);
    }
}