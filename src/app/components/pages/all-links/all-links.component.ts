import { Component, OnInit } from '@angular/core';
import { routerLink } from 'src/app/models/routerLink';

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
      {address:"/", text:" - WelcomeComponent"},
      {address:"/bed_connection", text:"bed_connection - ConnectionProblemComponent"},
      {address:"/wrong_mail", text:"wrong_mail - MailProblemComponent"},
      {address:"/router", text:"router - AllLinksComponent"},
      {address:"/thank_u", text:"thank_u - ThankUComponent"},
      {address:"/home", text:"home - HomeComponent"},
      {address:"/post_search", text:"post_search - PostSearchComponent"},
      {address:"/hope_we_helped", text:"hope_we_helped - HopeWeHelpedComponent"},
      {address:"/test_service", text:"test_service - TestServiceComponent"},
      {address:"/give", text:"give - PostCreateComponent"},
      {address:"/main", text:"main - TodoListComponent"},
      {address:"/what_is_up", text:"what_is_up - WhatIsUpComponent"}
    ]
   }
}
