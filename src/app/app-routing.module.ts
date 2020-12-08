import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AllLinksComponent } from './components/pages/all-links/all-links.component';
import { ConnectionProblemComponent } from './components/pages/connection-problem/connection-problem.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HopeWeHelpedComponent } from './components/pages/hope-we-helped/hope-we-helped.component';
import { MailProblemComponent } from './components/pages/mail-problem/mail-problem.component';
import { PostCreateComponent } from './components/pages/post-create/post-create.component';
import { PostSearchComponent } from './components/pages/post-search/post-search.component';
import { ThankUComponent } from './components/pages/thank-u/thank-u.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { WhatIsUpComponent } from './components/pages/what-is-up/what-is-up.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TestServiceComponent } from './test-service/test-service.component';

const routes: Routes = [

  // ({path:")(\w*)?(", component: )(\w+)(},?)
  // {address:"/$2", text:"$2 - $4"},
  {path:"", component: WelcomeComponent},
  {path:"bed_connection", component: ConnectionProblemComponent},
  {path:"wrong_mail", component:MailProblemComponent},
  {path:"router", component: AllLinksComponent},
  {path:"thank_u", component: ThankUComponent},
  {path:"home", component: HomeComponent},
  {path:"post_search", component: PostSearchComponent},
  {path:"hope_we_helped", component: HopeWeHelpedComponent},
  {path:"test_service", component: TestServiceComponent},
  {path:"give", component: PostCreateComponent},
  {path:"main", component: TodoListComponent},
  {path:"what_is_up", component: WhatIsUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
