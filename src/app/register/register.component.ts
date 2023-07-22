// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from '../RegisterPayload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    // id: Number;
    username: string ="";
    email: string ="";
    password: string ="";


register : RegisterPayload =new RegisterPayload()
  constructor(private http: HttpClient, private router: Router,private authService: AuthService )
  {

  }
  save()
  {
    console.log(this.register);
    //this.authService.registerUser(this.register).subscribe();
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    };

    this.http.post("http://localhost:6969/myblog/user/register",this.register,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      this.register.id=resultData
      console.log(this.register);
      console.log('register success');
      // this.router.navigateByUrl('/auth/register-success');
    },error => {
      console.log('register failed');
      alert('Register Failed');
    });
  }

}
