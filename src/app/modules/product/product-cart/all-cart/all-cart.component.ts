import { AllCartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-cart',
  templateUrl: './all-cart.component.html',
  styleUrls: ['./all-cart.component.scss'],
})
export class AllCartComponent implements OnInit {
  public products: any = [];
  displayCarts: any = [];
  public productList = new BehaviorSubject<any>([]);
  public cartItems: any = [];
  public grandTotal!: number;

  constructor(private service: AllCartService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((result) => {
      this.products = result;
      this.grandTotal = this.service.getTotalPrice();
    });
  }

  // displayAllCarts() {
  //   this.services.carts().subscribe((result) => {
  //     this.displayCarts = result;
  //   });
  // }
}
