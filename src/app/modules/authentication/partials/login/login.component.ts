import { AuthenticationService } from './../../service/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';

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
    private authenticationService: AuthenticationService,
    private route: Router,
    private storageService: StorageService
  ) {}

  loginForm(): void {
    this.signUp = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  // get formControl(): any {
  //   return this.signUp.controls;
  // }

  // toggle password
  togglePassword() {
    this.show = !this.show;
  }

  onSubmit() {
    this.isFetching = true;
    this.authenticationService
      .login(this.signUp.value)
      .subscribe((res: any) => {
        this.storageService.setItem('token', res.token);
        console.log('==========================================>', res);
      });
  }
}
