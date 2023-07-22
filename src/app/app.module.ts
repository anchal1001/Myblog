import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component'; 
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MypostComponent } from './mypost/mypost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { UserHComponent } from './user-h/user-h.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    HomeComponent,
        HeaderComponent,
        FooterComponent,
        MypostComponent,
        ReadpostComponent,
        UserHComponent,
  
        
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
