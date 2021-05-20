/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'apps/virat-frontend-app/src/environments/environment';
@Injectable()
export class HomeService {
    username= 'sajjanrampal'
    password= 'virat@300320'
    constructor(private readonly httpClient: HttpClient){}

    getAssignee(){
        const headers = new HttpHeaders()
            .set(
                'Content-Type','application/json',
            )
            .set(
                'Authorization',`token ${environment.gitHubKey}`
            )
          
        return this.httpClient.get(`${environment.gitHubApiBase}${environment.repoName}assignees`,{headers})
    }

    getLable(){
        const headers = new HttpHeaders()
            .set(
                'Content-Type','application/json',
            )
            .set(
                'Authorization',`token ${environment.gitHubKey}`
            )
          
        return this.httpClient.get(`${environment.gitHubApiBase}${environment.repoName}labels`,{headers})
    }

    getIssues(queryParams){
        const headers = new HttpHeaders()
            .set(
                'Content-Type','application/json',
            )
            .set(
                'Authorization',`token ${environment.gitHubKey}`
            )
          
        return this.httpClient.get(`${environment.gitHubApiBase}${environment.repoName}issues?${queryParams}`,{headers})
    }
}

// function Authorization(Authorization: any, arg1: string) {
//     throw new Error('Function not implemented.');
// }
