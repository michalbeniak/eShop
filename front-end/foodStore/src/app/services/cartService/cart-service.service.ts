import { Injectable } from '@angular/core';
import { CartService } from '../storeService/cart.service';
import { Product } from '../../models/product';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import { State } from '../../models/state';
import { ContactDetails } from '../../models/contact-details';

@Injectable()
export class CartServiceService {
  
  contactDetails:ContactDetails = new ContactDetails("","","","","","","","","")
  shippingContactDetails:ContactDetails = new ContactDetails("","","","","","","","","")
  totalAmmount:number=0;
  state:State = new State("basket");
  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  getTotalAmmount() {
    let sum =0;
    this.cart.productArray.forEach(element => { sum+= element.Price * element.Quantity   
    });
    this.totalAmmount = this.precisionRound(sum, 2);
    return this.precisionRound(sum,2);

  }

  deleteFromCart(product:Product){
 
    var indexToDelete = this.cart.productArray.indexOf(product, 0);
    this.cart.count -= this.cart.productArray[indexToDelete].Quantity;
    if (indexToDelete >= 0){
        this.cart.productArray.splice(indexToDelete, 1);
    }
   
  }

  addToCart(product:Product ) {
    this.cart.productArray.push(product);
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  setCheckoutStage(){
    this.state.Status = "checkout";
  }
  setBasketStage(){
    this.state.Status = "basket";
  }

  setSummaryStage(){
    this.state.Status = "summary";
  }
  setPaymentStage(){
    this.state.Status = "payment";
  }
  getCheckout(){
    return this.contactDetails;
  }
  getShippingCheckout(){
    return this.shippingContactDetails;
  }

  
  
}
