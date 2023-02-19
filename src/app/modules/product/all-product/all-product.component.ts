import { AllProductService } from './../../authentication/service/all-product.service';
import { Component, OnInit } from '@angular/core';
// import { AllProductService } from '../../authentication/service/all-product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  displayAllProducts: any = [];

  constructor(private services: AllProductService) {}

  ngOnInit(): void {
    this.allProductsDisplay();
  }

  allProductsDisplay() {
    this.services.allProduct().subscribe((result) => {
      console.log(result);
      this.displayAllProducts = result.title;
    });
  }
}
