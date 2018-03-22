import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';
import { CartService } from '../../../../services/storeService/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shipping:string;
  constructor(private cartService:CartServiceService, private repo:CartService) { }

  ngOnInit() {
    this.SetClearCheckboxes();
    this.SetCheckedIfAny();
  }

  private SetClearCheckboxes() {
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
        checkboxes[i].checked = false;
      }
    }
  }

  clearOthers(event, actual:string) {
    if (event.target.checked){
      this.shipping = actual;
      var checkboxes = document.getElementsByTagName('input');
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          if(checkboxes[i].id != actual){
            checkboxes[i].checked = false;
          }         
        }
      }
    }
    else{
      this.shipping=null;
    }
  }

  setShipping(){
    if (this.shipping != null){
        this.cartService.setShippingToOrder(this.shipping);
    }
  }

  SetCheckedIfAny() {
    let shipping = this.cartService.getShipping();
    if(shipping != null){
      let checkbox = document.getElementById(shipping) as HTMLInputElement;
      checkbox.checked=true;
    }
  }

  setSummaryStage(){
    if (this.shipping){
      this.cartService.setSummaryStage();
    }
    else{
      alert("NO TY SI ALE KOKOT. VED CHECKNI NIECO");
    }
  }
};