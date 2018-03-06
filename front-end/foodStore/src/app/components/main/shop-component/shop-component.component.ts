import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from '../../../models/products-list';
import { CommunicatorService } from '../../../services/communicator/communicator.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent implements OnInit {

  productList: ProductsList = new ProductsList(null);

  constructor(private communicatorService:CommunicatorService) { }

  ngOnInit() {
    this.communicatorService.getAllProducts(this);
  }

  onChange(event) {
    console.log(event);
    if (event.target.value =="priceLowHigh") {
      this.sortLowHigh();
    }
    else if (event.target.value =="priceHighLow") {
      this.sortHighLow();
    }
    else if (event.target.value =="nameAz") {
      this.sortAz();
    }
    else if (event.target.value =="nameZa") {
      this.sortZa();
    }
    else if (event.target.value =="newest") {
      //TO DO      
    }
  }

  sortAz(){
    this.productList.ProductsList = this.productList.ProductsList.sort((n1,n2) => {
      if (n1.Name > n2.Name) {
          return 1;
      }
      if (n1.Name < n2.Name) {
          return -1;
      } 
      return 0;
    });
  }

   sortZa(){
    this.productList.ProductsList = this.productList.ProductsList.sort((n1,n2) => {
      if (n1.Name < n2.Name) {
          return 1;
      }  
      if (n1.Name > n2.Name) {
          return -1;
      } 
      return 0;
    });
  }

  sortHighLow(){
    this.productList.ProductsList = this.productList.ProductsList.sort((n1,n2) => {
      if (n1.Price < n2.Price) {
          return 1;
      }
      if (n1.Price > n2.Price) {
          return -1;
      }
      return 0;
    });
  }

  sortLowHigh(){
    this.productList.ProductsList = this.productList.ProductsList.sort((n1,n2) => {
      if (n1.Price > n2.Price) {
          return 1;
      }
      if (n1.Price < n2.Price) {
          return -1;
      }
      return 0;
    });
  }
}
