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
   return this.httpClient.get(`${environment.apiBase}user`)
  }

  encode(value: string) {
    return btoa(value);
  }
  decode(value: string) {
    return atob(value);
  }
  encodeKey(key: string) {
    return this.encode(key.toLowerCase());
  }
  encodeValue(
    value: object | string | number | Date | Array<any> | boolean
  ) {
    return this.encode(JSON.stringify(value));
  }
  decodeValue(
    value: string
  ): object | string | number | Date | Array<any> | boolean {
    const decodedValue = this.decode(value);
    return JSON.parse(decodedValue === 'undefined' ? 'null' : decodedValue);
  }
  
}
