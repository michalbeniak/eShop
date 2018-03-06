import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class CartService {

  productArray =  Array<Product>();
  count = 0;
  constructor() { }

  ngOnInit(){

    console.log(this.count);

  }
  test(){
    console.log(this.productArray);

  }
}
