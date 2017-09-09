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
        return { 'match': true };
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

    ErrorMessages: any = {
        required: "Required",
        pattern: "Invalid Pattern",
        match:"Both Emails Not Matching"
    };
    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            FirstName: ['', [Validators.maxLength(20), Validators.required, Validators.pattern('[a-zA-Z].*')]],
            LastName: ['', [Validators.maxLength(20), Validators.required, Validators.pattern('[a-zA-Z].*')]],
            EmailGroup: this.fb.group({
                Email: ['', Validators.required],
                ConfirmEmail: ['', Validators.required],
            }, { validator: EmailMatch }),
            ContactNo: '',
            Rating: ['', RangeValidator(1, 5)],
            SendNotificaton: 'email',
            SendCatalog: true
        });

        this.signUpForm.get("SendNotificaton").valueChanges.subscribe(value =>
            this.CheckNotificationType(value));
        const firstNameControl = this.signUpForm.get("FirstName");
        const lastNameControl = this.signUpForm.get("LastName");
        const EmailControl = this.signUpForm.get("EmailGroup.Email");
        const ConfirmEmailControl = this.signUpForm.get("EmailGroup.ConfirmEmail");
        this.signUpForm.get("SendNotificaton").valueChanges.subscribe(value => this.CheckNotificationType(value));
        firstNameControl.valueChanges.subscribe(value => this.GetFirstNameMessage(firstNameControl));
        lastNameControl.valueChanges.subscribe(value => this.GetLastNameMessage(lastNameControl));
        EmailControl.valueChanges.subscribe(value => this.GetEmailMessage(EmailControl,"Email"));
        ConfirmEmailControl.valueChanges.subscribe(value => this.GetEmailMessage(ConfirmEmailControl,"ConfirmEmail"));
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
    FirstNameMessage: string;
    LastNameMessage: string;
    EmailMessage: string;
    ConfirmEmailMessage: string;
    GetFirstNameMessage(c: AbstractControl): void {
        this.FirstNameMessage = "";
        if ((c.dirty || c.touched) && c.errors) {
            this.FirstNameMessage = Object.keys(c.errors).map(key =>
                                        this.ErrorMessages[key]).join(",");
        }
    }

    GetLastNameMessage(c: AbstractControl): void {
        this.LastNameMessage = "";
        if ((c.dirty || c.touched) && c.errors) {
            this.LastNameMessage = Object.keys(c.errors).map(key =>
                                        this.ErrorMessages[key]).join(",");
        }
    }

    GetEmailMessage(c: AbstractControl,type:string): void {
        if ((c.dirty || c.touched) && c.errors) {
            if (type === "Email") {
                this.EmailMessage = "";
                this.EmailMessage = Object.keys(c.errors).map(key =>
                    this.ErrorMessages[key]).join(",");    
            }else if (type==="ConfirmEmail") {
                this.ConfirmEmailMessage ="";
                this.ConfirmEmailMessage = Object.keys(c.errors).map(key =>
                    this.ErrorMessages[key]).join(",");    
            }            
        }
    }
}