import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCartRoutingModule } from './all-cart-routing.module';
import { AllCartComponent } from './all-cart.component';


@NgModule({
  declarations: [
    AllCartComponent
  ],
  imports: [
    CommonModule,
    AllCartRoutingModule
  ]
})
export class AllCartModule { }
