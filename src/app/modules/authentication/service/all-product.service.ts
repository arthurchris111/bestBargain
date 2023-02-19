import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from 'src/app/core/constance/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AllProductService {
  endpoint: Endpoint;
  constructor(private httpClient: HttpClient) {
    this.endpoint = new Endpoint();
  }

  // all products
  allProduct(): Observable<any> {
    return this.httpClient.get(this.endpoint.ALL_PRODUCT_ENDPOINT);
  }
}
