import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { AllCartComponent } from './product-cart/all-cart/all-cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'cart', component: ProductCartComponent },
  { path: 'allCart', component: AllCartComponent },
  { path: 'single', component: SingleProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
