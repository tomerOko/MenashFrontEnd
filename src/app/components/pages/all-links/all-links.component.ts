import { Component, OnInit } from '@angular/core';
import { routerLink } from 'src/app/modules/routerLink';

@Component({
  selector: 'app-all-links',
  templateUrl: './all-links.component.html',
  styleUrls: ['./all-links.component.scss']
})
export class AllLinksComponent implements OnInit {

  routerLinks :routerLink[]

  constructor() { }

  ngOnInit() {
    this.routerLinks=[
      {address:"/", text:"landing"},
      {address:"/main", text:"shoping list"},
      {address:"/bedConnection", text:"bedConnection"},
      {address:"/wrongMail", text:"wrongMail"},
      {address:"/thankU", text:"thankU"},
      {address:"/welcome", text:"welcome" },
      {address:"/postSearch", text:"postSearch"},
      {address:"/hopeWeHelped", text: "hopeWeHelped"},
      {address:"/test_service", text: "test_service"}

    ]
   }

}
