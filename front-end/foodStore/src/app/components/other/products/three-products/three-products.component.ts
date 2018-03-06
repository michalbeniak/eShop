import { Component, OnInit, Input } from '@angular/core';
import { CommunicatorService } from '../../../../services/communicator/communicator.service';
import { ProductsList } from '../../../../models/products-list';
import { BackgroundComponent } from '../../background/background.component';

@Component({
  selector: 'app-three-products',
  templateUrl: './three-products.component.html',
  styleUrls: ['./three-products.component.css']
})
export class ThreeProductsComponent implements OnInit {
  @Input()  productList: ProductsList;
  @Input()  test:string;
  @Input()  bgComponent:BackgroundComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.productList);
    console.log(this.test);
    console.log(this.productList);
  }

}
