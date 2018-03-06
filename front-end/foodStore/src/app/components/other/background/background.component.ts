import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from '../../../models/products-list';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input()  productList: ProductsList;
            currentImage: string = "/assets/testProductImages/FirstBig.jpg";
            
  constructor() { }

  ngOnInit() {
  }


}
