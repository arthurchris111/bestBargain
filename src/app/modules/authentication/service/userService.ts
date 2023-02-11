// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { postUserDetails } from '../models/authentication.model';

// @Injectable({ providedIn: 'root' })
// export class userService {
//   signUp: any;

//   constructor(private http: HttpClient) {}

//   //addUser
//   addUser(
//     email: any,
//     username: string,
//     firstName: string,
//     lastName: string,
//     password: any,
//     number: number
//   ) {
//     const postData: postUserDetails = {
//       email: email,
//       username: username,
//       firstName: firstName,
//       lastName: lastName,
//       password: password,
//       number: number,
//     };

//     return this.http.post('users', postData);
//   }

//   // getUser
//   getUser() {
//     return this.http.get<any>('');
//   }
// }
