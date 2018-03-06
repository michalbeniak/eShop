import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  @Input()  product:Product = new Product("","",0,"","",1);
            btnClass:string = "btnHidden";
  constructor() { }

  ngOnInit() {
  }

  showButton(event) {
    this.btnClass = "btnShow";
  }

  hideButton(event) {
    this.btnClass = "btnHidden";
  }
}
