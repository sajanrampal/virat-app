import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'tasks',
                loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule)
            },
            {
                path: 'task',
                loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)
            },
            {
                path: '',
                redirectTo: 'home'
            }
        ]
        //   {
        //     path: 'decision-trees',
        //     loadChildren:
        //       './pages/decision-trees/decision-trees.module#DecisionTreesModule'
        //   },
        //   {
        //     path: 'faqs',
        //     loadChildren: './pages/faqs/faqs.module#FaqsModule'
        //   },
        //   {
        //     path: 'picture-guides',
        //     loadChildren:
        //       './pages/picture-guides/picture-guides.module#PictureGuidesModule'
        //   },
        //   {
        //     path: 'home',
        //     loadChildren: './pages/home/home.module#HomeModule'
        //   },
        //   {
        //     path: 'articles',
        //     loadChildren: './pages/articles/articles.module#ArticlesModule'
        //   },
        //   {
        //     path: 'collabs',
        //     loadChildren: './pages/collabs/collabs.module#CollabsModule'
        //   },
        //   {
        //     path: 'profile',
        //     loadChildren: './pages/profile/profile.module#ProfileModule'
        //   },
        //   {
        //     path: 'comparisons',
        //     loadChildren:
        //       './pages/comparisons/comparisons.module#ComparisonsModule'
        //   },
        //   {
        //     path: 'lms',
        //     loadChildren: './pages/lms/lms.module#LmsModule',
        //     canLoad: [LmsGuardService]
        //   },
        //   {
        //     path: '',
        //     redirectTo: 'home'
        //   }
        // ]
      }
    ]),
    // StoreModule.forFeature('dashboard', dashboardReducers)
  ],
})
export class DashboardModule {}
