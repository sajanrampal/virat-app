/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'virat-app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  credentails: FormGroup;
  loading: boolean;
  credentialsInvalid = false;
  constructor(public readonly router: Router,private readonly fb: FormBuilder,private readonly loginService: LoginService) { }

  ngOnInit() {
    this.credentails = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public login(){
    if(this.credentails.valid){
      this.loading = true;
      // this.loginService.login(this.credentails.value).subscribe(userInfo=>{

      // })
      let loginResponse = this.loginService.login(this.credentails.value)
      if(loginResponse){
        this.router.navigate(['/dashboard'], {
          replaceUrl: true
        });
      }else{
        this.credentialsInvalid = true;
      }
    }
  }

}
