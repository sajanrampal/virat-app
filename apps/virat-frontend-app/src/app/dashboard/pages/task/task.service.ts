/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/virat-frontend-app/src/environments/environment';
@Injectable()
export class TaskService {
  constructor(private readonly httpClient: HttpClient) { }

  getTask(id):any{
   return this.httpClient.get(`${environment.apiBase}todos/${id}`)
  }

  saveTask(task){
    return this.httpClient.post(`${environment.apiBase}todos`,task)
  }

  UpdateTask(task, taskId){
    return this.httpClient.put(`${environment.apiBase}todos/${taskId}`,task)
  }


  
}
