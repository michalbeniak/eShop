import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartServiceService } from '../../../services/cartService/cart-service.service';
import { CartService } from '../../../services/storeService/cart.service';
import { State } from '../../../models/state';

@Component({
  selector: 'app-cart-detail-component',
  templateUrl: './cart-detail-component.component.html',
  styleUrls: ['./cart-detail-component.component.css']
})
export class CartDetailComponentComponent implements OnInit {
  


  constructor(private cart:CartService, private cartService:CartServiceService ) { }

  ngOnInit() {
  }
}
