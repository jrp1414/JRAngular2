"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.FirstName = new forms_1.FormControl(this.auth.currentUser.firstName, [forms_1.Validators.required,
            forms_1.Validators.pattern('[a-zA-Z].*'), forms_1.Validators.maxLength(20)]);
        this.LastName = new forms_1.FormControl(this.auth.currentUser.lastName, forms_1.Validators.required);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.profileForm = this.fb.group({
        //   FirstName:["",Validators.required],
        //   LastName:[{value:"",disabled:true}]
        // });
        this.profileForm = new forms_1.FormGroup({
            FirstName: this.FirstName,
            LastName: this.LastName
        });
    };
    ProfileComponent.prototype.SetTestData = function () {
        this.profileForm.setValue({
            FirstName: this.auth.currentUser.firstName,
            LastName: this.auth.currentUser.lastName
        });
    };
    ProfileComponent.prototype.saveProfile = function () {
        this.auth.UpdateCurrentUser(this.profileForm.value.FirstName, this.profileForm.value.LastName);
        this.router.navigate(["/products"]);
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(["/products"]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "profile.component.html"
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, forms_1.FormBuilder])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map