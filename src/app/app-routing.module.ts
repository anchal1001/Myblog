import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : '',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
