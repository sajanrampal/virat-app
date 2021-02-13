/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(credentials){
      if(credentials.emailId ==='sajan@gmail.com' && credentials.password === '12345'){
          return true
      }else{
          return false
      }
  }
}
