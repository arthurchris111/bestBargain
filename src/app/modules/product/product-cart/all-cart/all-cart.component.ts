import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-cart',
  templateUrl: './all-cart.component.html',
  styleUrls: ['./all-cart.component.scss'],
})
export class AllCartComponent implements OnInit {
  displayCarts: any = [];
  public productList = new BehaviorSubject<any>([]);
  public cartItems: any = [];

  constructor(private services: ProductService) {}

  ngOnInit(): void {
    this.displayAllCarts();
  }

  displayAllCarts() {
    this.services.carts().subscribe((result) => {
      this.displayCarts = result;
    });
  }

  getProducts(): any {
    this.productList.asObservable();
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
  }
}
