import { Product } from './product';
import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

export class ProductsList {
    ProductsList: Product[] = new Array<Product>();

    constructor(array: Array<object>) {

        for(let item in array){
            this.ProductsList.push(
                new Product(
                    array[item]["Name"], 
                    array[item]["Description"], 
                    array[item]["Price"], 
                    array[item]["ImagePath"], 
                    array[item]["Guid"], 
                    array[item]["Quantity"]
                ));
        }
    }
}
