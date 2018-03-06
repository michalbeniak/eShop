import { Component, OnInit } from '@angular/core';
import { ProductsList } from './models/products-list';
import { CommunicatorService } from './services/communicator/communicator.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cart;
  constructor() { 
  }
  ngOnInit() {
    this.cart = 10;
  }
}
