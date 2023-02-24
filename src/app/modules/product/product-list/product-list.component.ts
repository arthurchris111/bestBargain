import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../../authentication/service/all-product.service';
import { HeaderComponent } from 'src/app/layouts/header/header.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayAllProducts: any = [];

  constructor(private services: AllProductService) {}

  ngOnInit(): void {
    this.allProductsDisplay();
  }

  allProductsDisplay() {
    this.services.allProduct().subscribe((result) => {
      // console.log(result);
      this.displayAllProducts = result;
    });
  }
}
