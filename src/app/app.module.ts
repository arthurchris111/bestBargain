import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/authentication/partials/login/login.component';
import { RegistrationComponent } from './modules/authentication/partials/registration/registration.component';
import { ButtonComponent } from './component/button/button.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { LoginButtonComponent } from './component/button/login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ButtonComponent,
    HeaderComponent,
    NavbarComponent,
    LoginButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
