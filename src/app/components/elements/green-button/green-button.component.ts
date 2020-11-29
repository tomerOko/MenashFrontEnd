import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {

  @Input() isWide:boolean = true;
  @Input() title:string;
  @Input() is_router_ling:boolean;
  @Input() link_to:string = "";

  link_to_img="../../../../assets/big_greeny.png"

  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
    console.log(this.isWide)
    if(this.isWide!=true){
      this.link_to_img="../../../../assets/small_greeny.png"
    }
  }

}
