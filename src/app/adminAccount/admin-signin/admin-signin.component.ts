import { Component, OnInit } from '@angular/core';
import {AdminAccount} from '../models/adminAccount.model';
import {AdminAccountService} from '../adminAccount.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import  {NavHeaderService} from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  adminSignInForm: FormGroup;
  userModel : AdminAccount;
  constructor(private fb: FormBuilder, private accountService : AdminAccountService, private router: Router, private nav : NavHeaderService) { }

  ngOnInit() {
    this.nav.hide();
    this.createForm();
  }

  createForm() {
    this.adminSignInForm = this.fb.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  signInSubmit(adminSignInForm:FormGroup)  
  {  
    this.userModel= new AdminAccount(
      adminSignInForm.controls.userName.value,
      adminSignInForm.controls.password.value,
    );
    console.log(this.adminSignInForm); 

    this.accountService.signIn(this.userModel).subscribe(data => {
              console.log(data);
              if(data.length >0 ){
                console.log(data[0]);
                this.router.navigate(['/MainContentUpload']);
              }

    }, error => {
      console.log(error);
    });

  }

}
