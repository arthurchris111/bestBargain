import { Router } from '@angular/router';
import { postUser } from '../partials/registration/registration.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class userService {
  signUp: any;

  constructor(private http: HttpClient, private route: Router) {}

  //addUser
  addUser(
    email: any,
    username: string,
    firstName: string,
    lastName: string,
    password: any,
    number: number
  ) {
    const postData: postUser = {
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      number: number,
    };
    // backend url missing
    this.http.post('', postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  // getUser
  getUser() {
    return this.http.get<any>('');
  }
}
