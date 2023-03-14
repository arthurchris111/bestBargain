import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/core/constance/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint: Endpoint;
  constructor(private httpClient: HttpClient) {
    this.endpoint = new Endpoint();
  }

  // cart
  carts(): Observable<any> {
    return this.httpClient.get(this.endpoint.CARTS_ENDPOINT);
  }

  // all products
  allProduct(): Observable<any> {
    return this.httpClient.get(this.endpoint.ALL_PRODUCT_ENDPOINT);
  }

  // single product
  singleProduct(): Observable<any> {
    return this.httpClient.get(this.endpoint.SINGLE_PRODUCT_ENDPOINT);
  }
}
