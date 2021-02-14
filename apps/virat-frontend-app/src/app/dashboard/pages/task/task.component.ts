/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import {TaskService} from './task.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'virat-app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    providers:[TaskService,ToastrService]
  })
export class TaskComponent implements OnInit{
    task: FormGroup;
    editiableTask:any;
    taskEditableId:string;
    isEditedTask:boolean= false;
    dataSaving:boolean = false;
    constructor(private readonly router: Router,
        private readonly toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly taskService: TaskService){
            this.route.queryParamMap.subscribe(params => {
                if(params.get('id')){
                    this.taskEditableId = params.get('id')
                    this.taskService.getTask(params.get('id')).subscribe(res=>{
                        this.isEditedTask = true;                        
                        this.editiableTask = res;
                        this.task.get('taskName').setValue(this.editiableTask.payload.todo.taskName);
                        this.task.get('assignedTo').setValue(this.editiableTask.payload.todo.assignedTo);
                        if(this.editiableTask.payload.todo.status == 1){
                            this.task.get('status').setValue(true);    
                        }else{
                            this.task.get('status').setValue(false);    
                        }
                    })
                }
                
              });
        }

    ngOnInit(){
        this.task = this.fb.group({
            taskName: ['', [Validators.required]],
            assignedTo: ['', [Validators.required]],
            status: [0]
          });
    }

    saveTask(){
        if(this.task.valid){
            this.dataSaving = true
            if(this.task.value.status){
                this.task.get('status').setValue(1);
            }else{
                this.task.get('status').setValue(0);

            }
            if(!this.isEditedTask){
                this.taskService.saveTask(this.task.value).subscribe(res=>{
                    console.log(res)
                    this.showSaveToaster()
                    this.dataSaving = false
                    this.router.navigate(['/dashboard', 'tasks']);
                })
            }else{
                this.taskService.UpdateTask(this.task.value, this.taskEditableId).subscribe(res=>{
                    console.log(res)
                    this.showUpdateToaster()
                    this.dataSaving = false
                    this.router.navigate(['/dashboard', 'tasks']);
                })
            }
            
        }
    }

    showSaveToaster(){
        this.toastr.success('Task has been successful saved!')
    }

    showUpdateToaster(){
        this.toastr.success('Task has been successful updated!')
    }

 
}