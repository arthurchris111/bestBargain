import { AllCartService } from './../../modules/product/product-cart/all-cart/all-cart.service';
import { Component, OnInit } from '@angular/core';
import { MenuItems } from './models/header.data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = MenuItems;
  public totalItem = 0;

  constructor(private services: AllCartService) {}

  ngOnInit(): void {
    // this.services.getProducts().subscribe((res: any) => {
    //   this.totalItem = res.length;
    // });
  }
}
