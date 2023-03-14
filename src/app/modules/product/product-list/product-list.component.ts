import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayAllProducts: any = [];

  constructor(private services: ProductService) {}

  ngOnInit(): void {
    this.allProductsDisplay();
  }

  allProductsDisplay() {
    this.services.allProduct().subscribe((result) => {
      // console.log(result);
      this.displayAllProducts = result;
    });
  }

  public cartItem: any = [];
  public productList = new BehaviorSubject<any>([]);

  getProduct() {
    return this.productList.asObservable();
  }

  addToCart(item: any) {
    this.cartItem.push(item);
    this.productList.next(this.cartItem);
  }
}
