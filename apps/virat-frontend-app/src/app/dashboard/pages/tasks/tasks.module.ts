import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule,HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        }
    ]),
  ],
})
export class TasksModule {}
