import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogAppComponent } from './login/login-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RegAppComponent } from './register/reg-app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegAppComponent,
    NavBarComponent,
    LogAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
