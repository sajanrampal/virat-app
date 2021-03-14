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

    headers = [
        {text:'Id',isSortAble:true},
        {text:'Name',isSortAble:true},
        {text:'Class',isSortAble:true},
        {text:'Section',isSortAble:true},
        {text:'action',isSortAble:false},
        {text:'keyId'}]
    data = [
        {
            id:1,
            name:'sajan',
            class:'bca',
            section:'a',
            action:'go',
            keyId:'sajanrampal'
        },
        {
            id:2,
            name:'sajan',
            class:'bca',
            section:'a',
            action:'go',
            keyId:'sajanrampal'
        },
        {
            id:3,
            name:'sajan',
            class:'bca',
            section:'a',
            action:'go',
            keyId:'sajanrampal'
        },
        {
            id:4,
            name:'sajan',
            class:'bca',
            section:'a',
            action:'go',
            keyId:'sajanrampal'
        },
        {
            id:5,
            name:'sajan',
            class:'bca',
            section:'a',
            action:'go',
            keyId:'sajanrampal'
        }
    ]

    ngOnInit(){
        this.title = 'sajan';
    }

    sortCallBack(event){
        console.log(event)
    }

    searchCallBack(event){
        console.log(event)
    }

    goToTasks(){
        this.router.navigate(['/dashboard', 'tasks']);
    }

    goToTask(){
        this.router.navigate(['/dashboard', 'task']);
    }
}