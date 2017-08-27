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
var auth_service_1 = require("./auth.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
function RangeValidator(param1, param2) {
    return function (c) {
        if (c.value !== undefined && (isNaN(c.value) || c.value < param1 || c.value > param2)) {
            return { 'range': true };
        }
        else {
            return null;
        }
    };
}
function EmailMatch(c) {
    var email = c.get('Email');
    var confirmEmail = c.get('ConfirmEmail');
    if (email.value !== confirmEmail.value) {
        return { 'match': true };
    }
    return null;
}
var UserSignUpComponent = (function () {
    function UserSignUpComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
    }
    UserSignUpComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            FirstName: ['', [forms_1.Validators.maxLength(20), forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]],
            LastName: ['', [forms_1.Validators.maxLength(20), forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]],
            EmailGroup: this.fb.group({
                Email: ['', forms_1.Validators.required],
                ConfirmEmail: ['', forms_1.Validators.required],
            }, { validator: EmailMatch }),
            ContactNo: '',
            Rating: ['', RangeValidator(1, 5)],
            SendNotificaton: 'email',
            SendCatalog: true
        });
    };
    UserSignUpComponent.prototype.CheckNotificationType = function (notifyVia) {
        var mobile = this.signUpForm.get('ContactNo');
        if (notifyVia === 'mobile') {
            mobile.setValidators(forms_1.Validators.required);
        }
        else {
            mobile.clearValidators();
        }
        mobile.updateValueAndValidity();
    };
    UserSignUpComponent.prototype.SignUpUser = function () {
        console.log(this.signUpForm.value);
    };
    return UserSignUpComponent;
}());
UserSignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user_signup.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, forms_1.FormBuilder])
], UserSignUpComponent);
exports.UserSignUpComponent = UserSignUpComponent;
//# sourceMappingURL=user_signup.component.js.map