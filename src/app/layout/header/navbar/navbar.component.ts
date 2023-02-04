import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../models/header.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems = MenuItems;
  constructor() {}

  ngOnInit(): void {}
}
