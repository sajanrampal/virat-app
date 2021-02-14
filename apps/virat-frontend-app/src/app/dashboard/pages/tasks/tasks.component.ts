/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import {TasksService} from './tasks.service'
@Component({
    selector: 'virat-app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    providers:[TasksService]
  })
export class TasksComponent implements OnInit{
    loading = true;
    dammyTasks=[{
        taskName:'Task 1',
        assigned:'sajan',
        status:'pending'

    },{
        taskName:'Task 2',
        assigned:'sahil',
        status:'completed'

    },{
        taskName:'Task 3',
        assigned:'mohit',
        status:'pending'

    },{
        taskName:'Task 4',
        assigned:'virat',
        status:'Completed'

    }

    ]
    tasks:any= [];
    constructor(private readonly router: Router,
        private readonly tasksService:TasksService,
        ){}

    ngOnInit(){
        this.tasksService.getTasks().subscribe(res=>{
            this.loading = false;
            this.tasks = res;
            console.log(res)
        })
    }

    goToTasks(task){
        this.router.navigate(['/dashboard', 'task'],  {
            queryParams: {
              id: task._id
            }
          });
    }

 
}