import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/authentication/partials/login/login.component';
import { RegistrationComponent } from './modules/authentication/partials/registration/registration.component';
import { ButtonComponent } from './component/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialsComponent } from './component/socials/socials.component';
import { LayoutsComponent } from './layouts/layouts.component';
// import { HeaderComponent } from './layouts/header/header.component';
// import { FooterComponent } from './layouts/footer/footer.component';
import { HoverDirective } from './core/directives/hover.directive';
// import { ProductComponent } from './modules/product/product.component';
// import { AllCartComponent } from './modules/product/product-cart/all-cart/all-cart.component';
// import { LayoutsModule } from './layouts/layouts.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ButtonComponent,
    SocialsComponent,
    LayoutsComponent,
    // FooterComponent,
    HoverDirective,
    // ProductComponent,
    // AllCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
