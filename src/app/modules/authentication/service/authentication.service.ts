import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Endpoint } from 'src/app/core/constance/endpoints';
import { LoginModel } from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  endpoint: Endpoint;
  constructor(private httpClient: HttpClient) {
    this.endpoint = new Endpoint();
  }

  public login(data: LoginModel): Observable<any> {
    return this.httpClient
      .post(this.endpoint.LOGIN_ENDPOINT, data)
      .pipe(catchError((error: unknown) => throwError(() => error)));
  }

  public logiSn(data: LoginModel): Observable<any> {
    return this.httpClient
      .post(this.endpoint.LOGIN_ENDPOINT, data)
      .pipe(catchError((error: unknown) => throwError(() => error)));
  }
}
