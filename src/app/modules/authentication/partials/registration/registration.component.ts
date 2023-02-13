import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { StorageService } from 'src/app/core/services/storage.service';
// import { HttpClient } from '@angular/common/http';
// import { apiService } from '../../service/apiService';
// import { userService } from '../../service/userService';
// import { postUserDetails } from '../../models/authentication.model';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService,
    private storageService: StorageService
  ) {}

  registrationForm(): void {
    this.registration = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.registrationForm();
  }

  //toggle password
  togglePassword() {
    this.show = !this.show;
  }

  // submitting registration from
  onSubmit() {
    this.submitted = true;
    this.userSubmitted = true;

    this.authenticationService
      .registration(this.registration.value)
      .subscribe((res: any) => {
        // this.storageService.setItem('token', res.token);
      });

    //route registration page to login if valid
    if (this.registration.invalid) {
      return;
    } else {
      this.route.navigate(['/auth/login']);
    }

    // this.registration.reset();
    this.submitted = false;
    this.userSubmitted = false;

    // this.userService.addUser(
    //   postData.email,
    //   postData.username,
    //   postData.firstName,
    //   postData.lastName,
    //   postData.number,
    //   postData.password
    // );
  }
}
