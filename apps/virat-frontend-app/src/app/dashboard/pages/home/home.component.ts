/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'virat-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent implements OnInit{
    title:string
    constructor(public readonly router: Router,){}

    ngOnInit(){
        this.title = 'sajan';
    }

    goToTasks(){
        this.router.navigate(['/dashboard', 'tasks']);
    }

    goToTask(){
        this.router.navigate(['/dashboard', 'task']);
    }
}