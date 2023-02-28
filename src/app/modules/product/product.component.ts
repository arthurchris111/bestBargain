import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../authentication/service/all-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: AllProductService) {}
  displaySingleProduct: any = [];

  ngOnInit(): void {
    this.singleProduct();
  }

  singleProduct() {
    this.service.singleProduct().subscribe((result) => {
      console.log(result);

      this.displaySingleProduct = result;
    });
  }
}
