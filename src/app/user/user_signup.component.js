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
        this.ErrorMessages = {
            required: "Required",
            pattern: "Invalid Pattern",
            match: "Both Emails Not Matching"
        };
    }
    UserSignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.signUpForm.get("SendNotificaton").valueChanges.subscribe(function (value) {
            return _this.CheckNotificationType(value);
        });
        var firstNameControl = this.signUpForm.get("FirstName");
        var lastNameControl = this.signUpForm.get("LastName");
        var EmailControl = this.signUpForm.get("EmailGroup.Email");
        var ConfirmEmailControl = this.signUpForm.get("EmailGroup.ConfirmEmail");
        this.signUpForm.get("SendNotificaton").valueChanges.subscribe(function (value) { return _this.CheckNotificationType(value); });
        firstNameControl.valueChanges.subscribe(function (value) { return _this.GetFirstNameMessage(firstNameControl); });
        lastNameControl.valueChanges.subscribe(function (value) { return _this.GetLastNameMessage(lastNameControl); });
        EmailControl.valueChanges.subscribe(function (value) { return _this.GetEmailMessage(EmailControl, "Email"); });
        ConfirmEmailControl.valueChanges.subscribe(function (value) { return _this.GetEmailMessage(ConfirmEmailControl, "ConfirmEmail"); });
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
    UserSignUpComponent.prototype.GetFirstNameMessage = function (c) {
        var _this = this;
        this.FirstNameMessage = "";
        if ((c.dirty || c.touched) && c.errors) {
            this.FirstNameMessage = Object.keys(c.errors).map(function (key) {
                return _this.ErrorMessages[key];
            }).join(",");
        }
    };
    UserSignUpComponent.prototype.GetLastNameMessage = function (c) {
        var _this = this;
        this.LastNameMessage = "";
        if ((c.dirty || c.touched) && c.errors) {
            this.LastNameMessage = Object.keys(c.errors).map(function (key) {
                return _this.ErrorMessages[key];
            }).join(",");
        }
    };
    UserSignUpComponent.prototype.GetEmailMessage = function (c, type) {
        var _this = this;
        if ((c.dirty || c.touched) && c.errors) {
            if (type === "Email") {
                this.EmailMessage = "";
                this.EmailMessage = Object.keys(c.errors).map(function (key) {
                    return _this.ErrorMessages[key];
                }).join(",");
            }
            else if (type === "ConfirmEmail") {
                this.ConfirmEmailMessage = "";
                this.ConfirmEmailMessage = Object.keys(c.errors).map(function (key) {
                    return _this.ErrorMessages[key];
                }).join(",");
            }
        }
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