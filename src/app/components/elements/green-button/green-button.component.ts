import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {

  @Input() isWide; //wide button background or the thiner one
  @Input() title:string; //the text in the button
  @Input() is_router_link:number = 0; //0 or smaller to regular link <> 1 or greater to routner link
  @Input() link_to:string = ""; // href/

  is_href=[]
  is_router=[]
  link_to_img="../../../../assets/big_greeny.png"

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.isWide+"--"+this.title+"--"+this.is_router_link+"--"+this.link_to)
    console.log(this.isWide)
    if(this.isWide==false){
      console.log("thin")
      this.link_to_img="../../../../assets/small_greeny.png"
    }
    console.log(this.is_router_link)
    if(this.is_router_link>0){
      this.is_router.push(1)
    }else{
      this.is_href.push(1)
    }
    console.log(this.is_href)
    console.log(this.is_router)
  }

}
