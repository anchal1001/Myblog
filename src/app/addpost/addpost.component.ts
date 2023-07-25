// import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// 
// // import { AngularEditorModule } from '@kolkov/angular-editor'
// // config: AngularEditorConfig = { editable: true, spellcheck: true, height: '15rem', minHeight: '5rem', placeholder: 'Enter text here...', translate: 'no' }

// // imports :[AngularEditorModule]
// @Component({
//   selector: 'app-addpost',
//   templateUrl: './addpost.component.html',
//   styleUrls: ['./addpost.component.css']
// })

// export class AddpostComponent {
//   htmlContent?: any
//   // config: AngularEditorConfig = {
//   //   editable: true,
//   //   spellcheck: true,
//   //   height: '15rem',
//   //   minHeight: '5rem',
//   //   placeholder: 'Enter text here...',
//   //   translate: 'no',
//   //   defaultParagraphSeparator: 'p',
//   //   defaultFontName: 'Arial',
   
//   // };
// }






// // import { Component } from '@angular/core';
// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
// // // import { AngularEditorModule } from '@kolkov/angular-editor'
// // // config: AngularEditorConfig = { editable: true, spellcheck: true, height: '15rem', minHeight: '5rem', placeholder: 'Enter text here...', translate: 'no' }

// // // imports :[AngularEditorModule]
// // @Component({
// //   selector: 'app-addpost',
// //   templateUrl: './addpost.component.html',
// //   styleUrls: ['./addpost.component.css']
// // })

// // export class AddpostComponent {
// //  
// // }




import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';



@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  content?: any
    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '20rem',
      minHeight: '10rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
     
    };

  
   


    //user_name: String= ""; 
    
    constructor( private router: Router,private http:HttpClient, private fb: FormBuilder ) {}

    addPostForm = this.fb.group({
      title : '',
      body: ''
    })
  //username= this.authService.currentUser;
  
  // // isLoggedIn(): boolean {
  // //   if (this.authService.isLoggedIn()) {
  // //         return true; // User is logged in
  // //       } else {
  // //         return false; // User is logged out
  // //       }
  // // }
  
  
  // login_Payload=localStorage.getItem('loginUser');
  // obj = JSON.parse(this.login_Payload);

  addPost(){
      console.log(this.addPostForm.value)
    // this.addPostService.addPost(this.postPayload,this.obj).subscribe(data => {
    //   console.log('Success Response');
    //   this.router.navigateByUrl('/home');
    // }, error => {
    //   console.log('Failure Response');
    this.http.post("http://localhost:8888/blog/post/createPostByUserId/1/createPost",this.addPostForm.value,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log("resultData")

      console.log('register success');
      // this.router.navigateByUrl('/auth/register-success');
    },error => {
      console.log('register failed');
      alert('Register Failed');
    });
  }
    // })
  
    
   
     
    }
  

