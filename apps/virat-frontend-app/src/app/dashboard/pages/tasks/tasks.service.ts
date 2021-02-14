/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/virat-frontend-app/src/environments/environment';
@Injectable()
export class TasksService {
  constructor(private readonly httpClient: HttpClient) { }

  getTasks(){
   return this.httpClient.get(`${environment.apiBase}todos`)
  }

  
}
