import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllCartService {
  public productList = new BehaviorSubject<any>([]);
  public cartItems: any = [];

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  //add to cart
  addToCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getProducts();
    console.log(this.cartItems);
  }

  // clear cart
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  //get total price
  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.map((a: any) => {
      totalPrice += a.total;
      console.log(totalPrice);
    });
    return totalPrice;
  }
}
