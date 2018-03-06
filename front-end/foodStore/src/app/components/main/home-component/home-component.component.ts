import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductsList } from '../../../models/products-list';
import { CommunicatorService } from '../../../services/communicator/communicator.service';
import { CartServiceService } from '../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  product: Product = new Product("","",0,"","",1);
  productList: ProductsList = new ProductsList(null);
  constructor(private communicatorService:CommunicatorService, private cartService: CartServiceService) { }

  ngOnInit() {
    //this.communicatorService.passData(this);
    this.communicatorService.passFirstThreeData(this);
  }

}
