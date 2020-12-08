import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {

  @Input() is_wide: boolean; //wide button background or the thiner one
  @Input() is_google: boolean;
  @Input() is_router_link: boolean; //0 or smaller to regular link <> 1 or greater to routner link
  @Input() title:string; //the text in the button
  @Input() link_to:string = ""; // href/

  @HostBinding("style.top") top:string=''

  is_href=[]
  is_router=[]
  link_to_img="../../../../assets/small_greeny.png"

  constructor() {
   }

  ngOnInit(): void {
    this.is_wide=(typeof(this.is_wide)=="string")
    this.is_google=(typeof(this.is_google)=="string")
    this.is_router_link=(typeof(this.is_router_link)=="string")



    if(this.is_wide){
      console.log("thin")
      this.link_to_img="../../../../assets/big_greeny.png"
    }
    if(this.is_google){
      this.link_to_img="../../../../assets/googleLogin.png"
      this.top="66.5vh"
      this.link_to="http://localhost:3000/google"
    }
    if(this.is_router_link){
      this.is_router.push(1)
    }else{
      this.is_href.push(1)
    }
  }
}
