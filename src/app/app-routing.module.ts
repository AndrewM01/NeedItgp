import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogAppComponent } from './login/login-app.component';
import { RegAppComponent } from './register/reg-app.component';

const routes: Routes = [
  { path: 'login', component: LogAppComponent },
  { path: 'register', component: RegAppComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
