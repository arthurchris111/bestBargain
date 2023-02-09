import { environment } from './../../../environments/environment';
export class Endpoint {
  baseEndpoint = environment.baseEndpoint;

  LOGIN_ENDPOINT = this.baseEndpoint + 'auth/login';
}
