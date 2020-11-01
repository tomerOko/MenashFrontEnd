import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  age:number = 3;
  hallow:string;

  constructor(){
    this.hallow="jhony boy go get that shuffle from the barn, we have a greate deal to bury";
  }


}
