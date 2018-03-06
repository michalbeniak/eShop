import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';
import { CartService } from '../../../../services/storeService/cart.service';
import { Product } from '../../../../models/product';
import { ContactDetails } from '../../../../models/contact-details';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private cartService:CartServiceService, private repo:CartService) { }

  ngOnInit() {

    /*let test1 = new Product("Test1","This is very first description",25.47,"assets/testProductImages/First.jpg","d68afab0-f4d3-11e7-82e2-e0cb4e55c262",1);
    let test2 = new Product("Test2","This is very second description",37.99,"assets/testProductImages/Second.jpg","d682e2-e0cb4e55c262",2);
    let test3 = new Product("Test3","This is very third description",43.1,"assets/testProductImages/Third.jpg","d68afab0-f4d3-11e7b4e55c262",3);

    this.repo.productArray.push(test1);
    this.repo.productArray.push(test2);
    this.repo.productArray.push(test3);

    this.cartService.contactDetails = new ContactDetails("Jan","Laska","jan.laska@gmail.com","047265","Harris street", "607","Sydney","2000","Australia");
    */
    
  }



}
