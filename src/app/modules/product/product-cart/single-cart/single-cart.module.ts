import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCartRoutingModule } from './single-cart-routing.module';
import { SingleCartComponent } from './single-cart.component';


@NgModule({
  declarations: [
    SingleCartComponent
  ],
  imports: [
    CommonModule,
    SingleCartRoutingModule
  ]
})
export class SingleCartModule { }
