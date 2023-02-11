export interface Authentication {}

export class LoginModel {
  username: string;
  password: string;
}

export interface RegistrationModel {
  email: any;
  username: string;
  firstName: string;
  lastName: string;
  password: any;
  number: number;
}
