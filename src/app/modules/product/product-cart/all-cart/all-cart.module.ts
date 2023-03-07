import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCartRoutingModule } from './all-cart-routing.module';
import { AllCartComponent } from './all-cart.component';
import { LayoutsModule } from '../../../../layouts/layouts.module';

@NgModule({
  declarations: [AllCartComponent],
  imports: [CommonModule, AllCartRoutingModule, LayoutsModule],
})
export class AllCartModule {}
