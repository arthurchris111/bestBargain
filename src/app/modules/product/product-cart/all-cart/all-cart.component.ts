import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductListComponent } from '../../product-list/product-list.component';

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

  constructor(private services: ProductService) {}

  ngOnInit(): void {
    // this.displayAllCarts();
  }

  displayAllCarts() {
    this.services.carts().subscribe((result) => {
      this.displayCarts = result;
    });
  }
}
