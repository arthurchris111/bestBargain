import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiService } from '../../service/apiService';
import { postUser } from './registration.model';
import { userService } from '../../service/userService';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registration!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  userSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  registrationForm(): void {
    this.registration = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.registrationForm();
  }

  // hide and show password
  togglePassword() {
    this.show = !this.show;
  }

  // submitting registration from
  onSubmit(postData: postUser) {
    this.submitted = true;
    this.userSubmitted = true;

    //route registration page to login if valid
    if (this.registration.invalid) {
      return;
    } else {
      this.route.navigate(['login']);
    }

    this.registration.reset();
    this.submitted = false;
    this.userSubmitted = false;
  }
}
