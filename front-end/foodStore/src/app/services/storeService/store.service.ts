import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsList } from '../../models/products-list';
import { Order } from '../../models/order';
import { ContactDetails } from '../../models/contact-details';
import { Shipping } from '../../models/shipping';

@Injectable()
export class StoreService {

  shipping:Shipping= new Shipping("");
  array:object[];
  productArray =  new ProductsList(this.array);
  count = 0;
  order:Order = new Order();
  shippingPrice:number;
  contactDetails:ContactDetails = new ContactDetails("","","","","","","","","")
  shippingContactDetails:ContactDetails = new ContactDetails("","","","","","","","","")
  constructor() { }

  ngOnInit(){

    this.order.contactDetails = this.contactDetails;
    this.order.productsArray =this.productArray

  }
  test(){
    console.log(this.productArray);

  }

  SetShipping(shipping:string){
    this.shipping.Method = shipping;
  }

  GetContactDetails(){
    return this.contactDetails;
  }
  GetShippingContactDetails(){
    return this.shippingContactDetails;
  }
}
