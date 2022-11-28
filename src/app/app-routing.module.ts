import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogAppComponent } from './login/login-app.component';
import { RegAppComponent } from './register/reg-app.component';

const routes: Routes = [
  { path:'login',component:LogAppComponent},
  {path:'register',component:RegAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
