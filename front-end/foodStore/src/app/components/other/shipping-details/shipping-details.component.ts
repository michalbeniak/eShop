import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  @Input() shippingStage:string;
  constructor() { }

  ngOnInit() {
    console.log(this.shippingStage);
  }

}
