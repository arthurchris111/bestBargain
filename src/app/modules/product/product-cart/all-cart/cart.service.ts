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

  // viewModal

  //remove cart item
  removeCartItem(product: any) {
    this.cartItems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1);
      }
    });
    this.productList.next(this.cartItems);
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

  //remove all cart items
  removeAllCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}
