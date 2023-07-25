import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  currentUser: any;

  // password: string = "";
  // username: string = "";

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {

  }
  loginForm = this.fb.group({
    username: '',
    password: ''

  })

  save() {
    console.log(this.loginForm.value)
    this.http.post("http://localhost:8888/blog/user/login", this.loginForm.value, { responseType: 'json' }).subscribe((resultData: any) => {
      console.log(resultData.message);
      // alert("login successfully")
      if (resultData.message == "username not exits")
                {
              
                  alert("username not exits");
         
                }
                else if(resultData.message=="Login Failed"||resultData.message=="password Not Match"){
                  alert("Invalid Credentials");
                }
                else
            
                 {
                  this.currentUser = Number(resultData.message)
                  console.log(this.currentUser);
                  localStorage.setItem("loginUser",JSON.stringify(this.currentUser));
                  
                  this.router.navigateByUrl('/mypost');
                }
    });
  }
  // login() {
  //   this.router.navigateByUrl('/allpost');
  // }


}






