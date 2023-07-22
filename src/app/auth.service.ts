// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginPayload } from './login-payload';
// import { RegisterPayload } from './register-payload';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    username: string ="";
  password: string ="";
  private isAuthenticated = false;
  currentUser: any;

  constructor(private router: Router,private http: HttpClient,) {}

//   login(loginpayload: LoginPayload): void {
    
//     console.log(loginpayload.username);
//     console.log(loginpayload.password);
 
   
    
//     this.http.post("http://localhost:8080/blog/user/login", loginpayload).subscribe(  (resultData: any) => {
//                 console.log(resultData);
         
//                 if (resultData.message == "username not exits")
//                 {
              
//                   alert("username not exits");
            
         
//                 }
//                 else if(resultData.message=="Login Failed"||resultData.message=="password Not Match"){
//                   alert("Invalid Credentials");
//                 }
//                 else
            
//                  {
//                   this.isAuthenticated = true;
//                   this.currentUser = Number(resultData.message);
//                   loginpayload.id=Number(resultData.message);
//                   console.log(loginpayload);
//                   localStorage.setItem("loginUser",JSON.stringify(loginpayload));
//                   console.log(this.currentUser);
//                   this.router.navigateByUrl('/home');
//                 }
                
                        
//               });
             
//             }
    // Simulate a successful login for demonstration purposes
    // if (email === 'admin' && password === 'password') {
    //   this.isAuthenticated = true;
    //   this.router.navigate(['/home']);
    // } else {
    //   console.log('Invalid credentials');
    // }
  

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['/home']);

  }
  // addUser(registerPayload: RegisterPayload){
  //   return this.http.post('http://localhost:8080/blog/user/register', registerPayload);
  // }
}
