import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  password : string ="";
  email : string = "";

  constructor(private http:HttpClient,private router:Router)
  {

  }

  save()
  {
    let bodyData = {
      
      "Email": this.email,
     
      "password": this.password
    };
    this.http.post("http://localhost:8085/api/login",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("registered successfully")
    });
  }
  login()
  {
   this.router.navigateByUrl('/login');
  }


}

  
  
 


