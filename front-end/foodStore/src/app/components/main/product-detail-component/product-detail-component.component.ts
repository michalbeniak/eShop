import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { CommunicatorService } from '../../../services/communicator/communicator.service';
import { MyCartComponent } from '../../other/my-cart/my-cart.component';
import { CartServiceService } from '../../../services/cartService/cart-service.service';
import { CartService } from '../../../services/storeService/cart.service';
import { forEach } from '@angular/router/src/utils/collection';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent implements OnInit {

  product:Product;
  productGuid:string;
  quantity:number =1;

  constructor(
    private communicatorService:CommunicatorService, 
    private activatedRoute: ActivatedRoute,
    private cartService: CartServiceService,
    private cart: CartService) {
    this.productGuid = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productGuid);

  }
  ngOnInit() {
    console.log(this.productGuid);
    this.communicatorService.passData(this, this.productGuid);
  }

  GetImageName() {
    console.log("in");
  }

  addToCart(){
    this.cart.count += +this.quantity;
    if (!this.isAddedAlready(this.product)) {
      this.product.setQuantity(+this.quantity);
      this.cartService.addToCart(this.product);
    }
    else {
      this.setQuantity(this.product);
    }
  }

  isAddedAlready(productToAdd:Product) {
    for ( let product of this.cart.productArray){
      if (product.Guid ==  productToAdd.Guid){
        return true;
      }
    }
    return false;
  }

  setQuantity(productToAdd:Product) {
    for ( let product of this.cart.productArray){
      if (product.Guid ==  productToAdd.Guid){    
        product.Quantity += +this.quantity;

       }
    }
  }


  

}
