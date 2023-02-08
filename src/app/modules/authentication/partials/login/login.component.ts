import { Router } from '@angular/router';

import { postUser } from './../registration/registration.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { userService } from '../../service/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signUp!: FormGroup;
  show: boolean = false;
  submitted: boolean = false;
  isFetching: boolean = false;
  password: any;
  user: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: userService,
    private route: Router
  ) {}

  loginForm(): void {
    this.signUp = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.loginForm();
    this.signUp;
    this.password = 'password';
  }

  // toggle password
  togglePassword() {
    this.show = !this.show;
  }

  login() {
    this.isFetching = true;
    this.userService.getUser().subscribe({
      next: (responseData: any) => {
        this.isFetching = false;
        const userArray = [];

        for (const key in responseData) {
          console.log(responseData[key]);
          userArray.push(responseData[key]);
        }

        const user = userArray.find((result: any) => {
          return (
            result.email === this.signUp.value.email &&
            result.password === this.signUp.value.password
          );
        });

        if (user) {
          this.route.navigate(['registration']);
          alert('Login Successfully');
        } else {
          alert('user not found');
        }
      },
    });
  }

  onSubmit(postData: postUser) {
    this.submitted = true;

    if (this.signUp.invalid) {
      return;
    } else {
      this.login();
    }
    // this.signUp.reset();
    this.submitted = false;
  }
}
