export interface Authentication {}

export class LoginModel {
  username: string;
  password: string;
}

export interface RegistrationModel {
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  password: string;
  phone: string;
}
