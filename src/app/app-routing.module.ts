import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserHComponent } from './user-h/user-h.component';
import { MypostComponent } from './mypost/mypost.component';
import { AddpostComponent } from './addpost/addpost.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'Home',
    component: HomeComponent

  },
  
  {
    path: 'mypost',
    component: MypostComponent
  },
  {
    path: 'addpost',
    component: AddpostComponent
  },


  { path: "userpanel", component: UserHComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
