import { Component, OnInit } from '@angular/core';
import { MenuItems } from './models/header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = MenuItems;

  constructor() {}

  ngOnInit(): void {}
}
