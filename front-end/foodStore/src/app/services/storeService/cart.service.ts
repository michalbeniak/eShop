import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsList } from '../../models/products-list';

@Injectable()
export class CartService {

  //productArray =  Array<Product>();
  shipping:string;
  array:object[];
  productArray =  new ProductsList(this.array);
  count = 0;
  constructor() { }

  ngOnInit(){

    console.log(this.count);

  }
  test(){
    console.log(this.productArray);

  }

  SetShipping(shipping:string){
    this.shipping = shipping;
  }
}
