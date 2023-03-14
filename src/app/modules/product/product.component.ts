import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}
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
