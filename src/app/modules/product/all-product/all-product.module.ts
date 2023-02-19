import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductRoutingModule } from './all-product-routing.module';
import { AllProductComponent } from './all-product.component';

@NgModule({
  declarations: [AllProductComponent],
  imports: [CommonModule, AllProductRoutingModule],
})
export class AllProductModule {}
