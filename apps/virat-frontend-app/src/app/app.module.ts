import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot([
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/deshboard.module').then(m => m.DashboardModule)
    },
   
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    }
],{useHash:true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
