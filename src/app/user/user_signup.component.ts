import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

function RangeValidator(param1: number, param2: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < param1 || c.value > param2)) {
            return { 'range': true };
        } else {
            return null;
        }
    }
}

function EmailMatch(c: AbstractControl): { [key: string]: boolean } | null {
    let email = c.get('Email');
    let confirmEmail = c.get('ConfirmEmail');
    if (email.value !== confirmEmail.value) {
        return {'match': true};
    }
    return null;
}

@Component({
    moduleId: module.id,
    templateUrl: 'user_signup.component.html'
})
export class UserSignUpComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    }
    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            FirstName: ['', [Validators.maxLength(20), Validators.required, Validators.pattern('[a-zA-Z].*')]],
            LastName: ['', [Validators.maxLength(20), Validators.required, Validators.pattern('[a-zA-Z].*')]],
            EmailGroup: this.fb.group({
                Email: ['', Validators.required],
                ConfirmEmail: ['', Validators.required],
            }, {validator: EmailMatch}),
            ContactNo: '',
            Rating: ['', RangeValidator(1, 5)],
            SendNotificaton: 'email',
            SendCatalog: true
        });
    }
    signUpForm: FormGroup;

    CheckNotificationType(notifyVia: string): void {
        const mobile = this.signUpForm.get('ContactNo');
        if (notifyVia === 'mobile') {
            mobile.setValidators(Validators.required);
        } else {
            mobile.clearValidators();
        }
        mobile.updateValueAndValidity();
    }

    SignUpUser(): void {
        console.log(this.signUpForm.value);
    }
}