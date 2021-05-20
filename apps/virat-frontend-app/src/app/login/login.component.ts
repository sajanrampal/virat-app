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
  data = [
    {
        url: 'https://api.github.com/repos/ProCloudware-Services/Support/issues/266',
        number: 266,
        title: '5/20 Milan:',
        state: 'open',
        created_at: '2021-05-20T05:40:04Z',
        updated_at: '2021-05-20T06:04:29Z',
        closed_at: null,
        author_association: 'CONTRIBUTOR',
         
    },
    {
      url: 'https://api.github.com/repos/ProCloudware-Services/Support/issues/266',
      number: 267,
      title: '5/20 Milan:',
      state: 'closed',
      created_at: '2021-05-20T05:40:04Z',
      updated_at: '2021-05-20T06:04:29Z',
      closed_at: null,
      author_association: 'CONTRIBUTOR',
       
  },
  {
    url: 'https://api.github.com/repos/ProCloudware-Services/Support/issues/266',
    number: 268,
    title: '5/20 Milan:',
    state: 'seja',
    created_at: '2021-05-20T05:40:04Z',
    updated_at: '2021-05-20T06:04:29Z',
    closed_at: null,
    author_association: 'CONTRIBUTOR',
     
},
{
  url: 'https://api.github.com/repos/ProCloudware-Services/Support/issues/266',
  number: 269,
  title: '5/20 Milan:',
  state: 'errere',
  created_at: '2021-05-20T05:40:04Z',
  updated_at: '2021-05-20T06:04:29Z',
  closed_at: null,
  author_association: 'CONTRIBUTOR',
   
},
{
  url: 'https://api.github.com/repos/ProCloudware-Services/Support/issues/266',
  number: 265,
  title: '5/20 Milan:',
  state: 'osn',
  created_at: '2021-05-20T05:40:04Z',
  updated_at: '2021-05-20T06:04:29Z',
  closed_at: null,
  author_association: 'CONTRIBUTOR',
   
}
]
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

  download(){
    this.downloadFile(this.data,'sajan')
  }

  downloadFile(data, filename = 'data') {
    let csvData = this.GenerateCSV(data);
    let blob = new Blob(['\ufeff' + csvData], {
        type: 'text/csv;charset=utf-8;',
    });
    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    let isSafariBrowser =
        navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
        //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

GenerateCSV(objArray) {
    let array =
        typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    let headerList = Object.keys(objArray[0]);
    for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = i + 1 + '';

        for (let index in headerList) {
            let head = headerList[index];
            if (array[i][head] === false || array[i][head] === 'false') {
                array[i][head] = 'Close';
            } else if (
                array[i][head] === true ||
                array[i][head] === 'true'
            ) {
                array[i][head] = 'Open';
            }
            line += ',' + array[i][head];
        }
        str += line + '\r\n';
    }
    return str;
}

}
