/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/virat-frontend-app/src/environments/environment';
@Injectable()
export class TaskService {
  constructor(private readonly httpClient: HttpClient) { }

  getTasks(){
   return this.httpClient.get('https://virat-app.herokuapp.com/api/v1/user')
  }

  saveTask(task){
    return this.httpClient.post(`${environment.apiBase}user`,task)
  }
  
}
