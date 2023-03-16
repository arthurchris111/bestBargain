import { AllCartService } from '../product-cart/all-cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayAllProducts: any = [];

  constructor(private services: ProductService, private cart: AllCartService) {}

  ngOnInit(): void {
    this.allProductsDisplay();
  }

  allProductsDisplay() {
    this.services.allProduct().subscribe((result) => {
      // console.log(result);
      this.displayAllProducts = result;
    });
  }

  //adding item to cart
  addToCart(item: any) {
    this.cart.addToCart(item);
    console.log(item);
  }
}
