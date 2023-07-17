import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component'; 
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,
    HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
