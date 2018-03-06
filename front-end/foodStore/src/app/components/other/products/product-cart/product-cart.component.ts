import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../models/product';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';
import { CartService } from '../../../../services/storeService/cart.service';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  @Input()
  product:Product;
  dataExist:boolean = true;
  total:number;
  pleaseDeleteMeEvent = new EventEmitter();
  constructor(private cartService:CartServiceService, private cart: CartService) { }

  ngOnInit() {
    this.total = this.precisionRound(this.product.Quantity * this.product.Price,2);
  }

  calculateAmmount(ammount){
    let previous = this.product.Quantity;
    this.product.setQuantity(+ammount);
    this.total = this.precisionRound(this.product.Quantity * this.product.Price,2);
    this.cartService.getTotalAmmount();
    if (previous != this.product.Quantity) {
      let diff = this.product.Quantity - previous; 
      this.cart.count += diff;
    }  
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  deleteProduct() {
    this.cartService.deleteFromCart(this.product);
    this.cartService.getTotalAmmount();
    this.pleaseDeleteMeEvent.emit();
    this.dataExist = false;
  }
  
}
