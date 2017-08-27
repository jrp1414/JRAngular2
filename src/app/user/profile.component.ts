import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validator, Validators,FormBuilder} from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService,private router:Router, private fb: FormBuilder) {

  }
  
  FirstName: FormControl = new FormControl(this.auth.currentUser.firstName, [Validators.required,
                  Validators.pattern('[a-zA-Z].*'), Validators.maxLength(20)]);
  LastName: FormControl = new FormControl(this.auth.currentUser.lastName, Validators.required);
  profileForm: FormGroup;
  ngOnInit(): void {
    
    // this.profileForm = this.fb.group({
    //   FirstName:["",Validators.required],
    //   LastName:[{value:"",disabled:true}]
    // });
    this.profileForm = new FormGroup({
      FirstName: this.FirstName,
      LastName: this.LastName
    });
  }

  SetTestData(): void{
    this.profileForm.setValue({
      FirstName: this.auth.currentUser.firstName,
      LastName: this.auth.currentUser.lastName
    });
  }

  saveProfile(): void{
    this.auth.UpdateCurrentUser(this.profileForm.value.FirstName, this.profileForm.value.LastName);
    this.router.navigate(["/products"]);
  }

  cancel(): void{
    this.router.navigate(["/products"]);
  }
}


