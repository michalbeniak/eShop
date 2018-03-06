import { Component, OnInit, Input, Output } from '@angular/core';
import { CommunicatorService } from '../../../../services/communicator/communicator.service';
import { Product } from '../../../../models/product';
import { ProductsList } from '../../../../models/products-list';
import { EventEmitter } from 'events';
import { BackgroundComponent } from '../../background/background.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  product:Product = new Product("","",0,"","",1);
  @Input()  bgComponent:BackgroundComponent;
  //@Output() currentImage: EventEmitter = new EventEmitter();
  currentImage: string;

  constructor() { 
  }

  ngOnInit() {
  }

  setBackgroundOnProductHover(event) {

    if (event.srcElement.currentSrc){
      let splitPath = event.srcElement.currentSrc.split(".");
      let resPath = splitPath[0] +"Big" + "." + splitPath[1] ;
  
      this.bgComponent.currentImage = resPath; 
    }
    else if (event.currentTarget.childNodes[1].className == "image"){
      let splitPath = event.currentTarget.childNodes[1].currentSrc.split(".");
      let resPath = splitPath[0] +"Big" + "." + splitPath[1] ;

      this.bgComponent.currentImage = resPath; 
    }
    else {
      console.log("error");
    }
    
  }
}
