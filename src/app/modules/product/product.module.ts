import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, LayoutsModule],
})
export class ProductModule {}
