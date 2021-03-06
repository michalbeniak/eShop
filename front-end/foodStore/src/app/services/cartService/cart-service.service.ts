import { Injectable } from '@angular/core';
import { StoreService } from '../storeService/store.service';
import { Product } from '../../models/product';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import { State } from '../../models/state';
import { ContactDetails } from '../../models/contact-details';
import { Order } from '../../models/order';
import { ShippingPrices } from '../../models/shipping-prices';

@Injectable()
export class CartServiceService {

  totalAmmount:number=0;
  state:State = new State("shipping");
  shippingPrices:ShippingPrices = new ShippingPrices();
  constructor(private reppository: StoreService) { }

  ngOnInit() {
  }

  getTotalAmmount() {
    let sum =0;
    this.reppository.productArray.ProductsList.forEach(element => { sum+= element.Price * element.Quantity   
    });
    if(this.reppository.shippingPrice){
      sum += this.reppository.shippingPrice;
    }

    this.totalAmmount = this.precisionRound(sum, 2);
    return this.precisionRound(sum,2);

  }

  deleteFromCart(product:Product){
 
    var indexToDelete = this.reppository.productArray.ProductsList.indexOf(product, 0);
    this.reppository.count -= this.reppository.productArray[indexToDelete].Quantity;
    if (indexToDelete >= 0){
        this.reppository.productArray.ProductsList.splice(indexToDelete, 1);
    }
   
  }

  addToCart(product:Product ) {
    this.reppository.productArray.ProductsList.push(product);
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
  getContactDetails(){
    return this.reppository.GetContactDetails();
  }
  getShippingContactDetails(){
    return this.reppository.GetShippingContactDetails();
  }
  setShippingToOrder(shippingMethod:string){
    this.reppository.SetShipping(shippingMethod);
  }
  getShipping(){
    return this.reppository.shipping;
  }

  getOrder(){
    return this.reppository.order;
  }

  setContactDetails(){
    this.reppository.order.contactDetails =this.reppository.contactDetails;
  }

  setProductList(){
    this.reppository.order.productsArray =this.reppository.productArray;
  }
  getShippingMethod(){
    return this.reppository.shipping.Method;
  } 
  setShippingPrice(shippingMethod:string) {
    if (shippingMethod == "standard"){
      this.reppository.shippingPrice =this.shippingPrices.Standard;
    }
    else if(shippingMethod == "store") {
      this.reppository.shippingPrice =this.shippingPrices.Store;
    }
    else if(shippingMethod == "next") {
      this.reppository.shippingPrice =this.shippingPrices.Next;
    }   
    else if(shippingMethod == "specific") {
      this.reppository.shippingPrice =this.shippingPrices.Specific;
    }
  }
}
