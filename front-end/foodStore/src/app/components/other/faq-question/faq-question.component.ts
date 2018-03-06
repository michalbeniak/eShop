import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-question',
  templateUrl: './faq-question.component.html',
  styleUrls: ['./faq-question.component.css']
})
export class FaqQuestionComponent implements OnInit {

  @Input() questionTitle:String;
  @Input() questionAnswer:String;
           active:Boolean = false;
           cssClass:String = "notActive";
           questionIcon:string = "https://png.icons8.com/ios-glyphs/25/666666/expand-arrow.png";
  constructor() { }

  ngOnInit() {
  }

  setClass() {
    if (this.active) {
      this.active = false;
      this.cssClass= "notActive";
      this.questionIcon = "https://png.icons8.com/ios-glyphs/25/666666/expand-arrow.png";
    }
    else {
      this.active = true;
      this.cssClass= "active";
      this.questionIcon = "https://png.icons8.com/ios-glyphs/25/666666/collapse-arrow.png";
      //https://png.icons8.com/ios-glyphs/300/666666/collapse-arrow.png
    }
    
  }

}
