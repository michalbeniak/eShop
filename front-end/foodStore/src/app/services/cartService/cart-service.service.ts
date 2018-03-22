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
  state:State = new State("shipping");
  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  getTotalAmmount() {
    let sum =0;
    this.cart.productArray.ProductsList.forEach(element => { sum+= element.Price * element.Quantity   
    });
    this.totalAmmount = this.precisionRound(sum, 2);
    return this.precisionRound(sum,2);

  }

  deleteFromCart(product:Product){
 
    var indexToDelete = this.cart.productArray.ProductsList.indexOf(product, 0);
    this.cart.count -= this.cart.productArray[indexToDelete].Quantity;
    if (indexToDelete >= 0){
        this.cart.productArray.ProductsList.splice(indexToDelete, 1);
    }
   
  }

  addToCart(product:Product ) {
    this.cart.productArray.ProductsList.push(product);
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
  setShippingStage(){
    this.state.Status = "shipping";
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
  setShippingToOrder(shippingMethod:string){
    this.cart.SetShipping(shippingMethod);
  }
  getShipping(){
    return this.cart.shipping;
  }
  
}
