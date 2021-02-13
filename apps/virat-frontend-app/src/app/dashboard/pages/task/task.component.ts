/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import {TaskService} from './task.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
    selector: 'virat-app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    providers:[TaskService,ToastrService]
  })
export class TaskComponent implements OnInit{
    task: FormGroup;
    constructor(private readonly router: Router,
        private readonly toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly taskService: TaskService){}

    ngOnInit(){
        this.task = this.fb.group({
            taskName: ['', [Validators.required]],
            assigned: ['', [Validators.required]],
            status: [0]
          });
    }

    saveTask(){
        if(this.task.valid){
            this.task.value
            this.showToaster()
            this.router.navigate(['/dashboard', 'tasks']);
            // this.taskService.saveTask(this.task.value).subscribe(res=>{
            //     this.showToaster()
            // })
        }
    }

    showToaster(){
        this.toastr.success('Hello, Im the toastr message.')
    }

 
}