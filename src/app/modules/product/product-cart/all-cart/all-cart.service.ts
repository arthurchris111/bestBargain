import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllCartService {
  public productList = new BehaviorSubject<any>([]);
  public cartItems: any = [];

  constructor() {}

  //add to cart
  addToCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
  }
}
