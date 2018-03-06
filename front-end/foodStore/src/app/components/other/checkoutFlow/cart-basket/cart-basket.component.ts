import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { CartService } from '../../../../services/storeService/cart.service';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-cart-basket',
  templateUrl: './cart-basket.component.html',
  styleUrls: ['./cart-basket.component.css']
})
export class CartBasketComponent implements OnInit {
  products: Product[];
  
  constructor(private cart:CartService, private cartService:CartServiceService) { }

  ngOnInit() {
    this.products = this.cart.productArray;
    this.cartService.getTotalAmmount();
  }

}
