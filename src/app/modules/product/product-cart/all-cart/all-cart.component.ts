import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-cart',
  templateUrl: './all-cart.component.html',
  styleUrls: ['./all-cart.component.scss'],
})
export class AllCartComponent implements OnInit {
  displayCarts = [];

  constructor(private services: ProductService) {}

  ngOnInit(): void {
    this.displayAllCarts();
  }

  displayAllCarts() {
    this.services.carts().subscribe((result) => {
      this.displayCarts = result;
    });
  }
}
