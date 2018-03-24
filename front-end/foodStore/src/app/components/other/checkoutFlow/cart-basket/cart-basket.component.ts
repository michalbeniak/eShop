import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { StoreService } from '../../../../services/storeService/store.service';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-cart-basket',
  templateUrl: './cart-basket.component.html',
  styleUrls: ['./cart-basket.component.css']
})
export class CartBasketComponent implements OnInit {
  products: Product[];
  
  constructor(private reppository:StoreService, private cartService:CartServiceService) { }

  ngOnInit() {
    this.products = this.reppository.productArray.ProductsList;
    this.cartService.getTotalAmmount();
  }
  setCheckoutStage(){
    this.cartService.setProductList();
    this.cartService.setCheckoutStage()

  }
}
