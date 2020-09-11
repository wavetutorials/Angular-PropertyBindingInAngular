import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div class="toolbar"><span>Welcome to {{title}}</span></div>
  <div class="content"><h3>{{'Welcome to ' + title}}</h3>
<button disabled='{{isDisabled}}'>Click Me</button>
<div [innerHTML]='pageData'></div>
<div innerHTML='{{pageData}}'></div>
      <img src='https://angular.io{{imageUrl}}' width="150px"/>

<button class="btn" [class]="appliedClass">Click Here</button>
<button class="btn" [class.btn-italic]="applyItalicClass">Click Here</button>
<button class="btn" [ngClass]="addClasses()">Multiple Classes</button>
<br/>

<button style="color:red" [style.font-size.px]="30">Style Binding</button>
<button style="color:red" [ngStyle]="addStyle()">ngStyle Binding</button>

</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addStyle(){
    return{
      'font-size.px': 25,
      'font-style': 'italic',
      'color': 'blue'
    }
  }

  addClasses() {
    return {
      'btn-bold': true,
      'btn-italic': false,
      'btn-blue': false,
      'btn-red': true
    };
}

appliedClass: string = "btn-bold btn-red";
applyItalicClass: boolean = false;
pageData: string = 'Pre Text - <script>alert("hello World")</script> - Post Script';
isDisabled: boolean = false;
title = 'Angular Tutorials';
imageUrl = '/assets/images/logos/angular/angular.svg';

constructor() {
}
}
