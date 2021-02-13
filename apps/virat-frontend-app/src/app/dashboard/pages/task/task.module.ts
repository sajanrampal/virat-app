import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule,HttpClientModule,FormsModule,
    ReactiveFormsModule,ToastrModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: TaskComponent,
        }
    ]),
  ],
})
export class TaskModule {}
