import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './../../layouts/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AllCartComponent } from './product-cart/all-cart/all-cart.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [ProductComponent, AllCartComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, LayoutsModule],
})
export class ProductModule {}
