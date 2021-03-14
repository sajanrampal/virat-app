import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { GridModule } from '../../../shared/components/grid/grid.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    GridModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        }
    ]),
  ],
})
export class HomeModule {}
