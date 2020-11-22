import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AllLinksComponent } from './components/pages/all-links/all-links.component';
import { ConnectionProblemComponent } from './components/pages/connection-problem/connection-problem.component';
import { HopeWeHelpedComponent } from './components/pages/hope-we-helped/hope-we-helped.component';
import { MailProblemComponent } from './components/pages/mail-problem/mail-problem.component';
import { PostSearchComponent } from './components/pages/post-search/post-search.component';
import { ThankUComponent } from './components/pages/thank-u/thank-u.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path:"main", component: TodoListComponent},
  {path:"", component: WelcomeComponent},
  {path:"bedConnection", component: ConnectionProblemComponent},
  {path:"wrongMail", component:MailProblemComponent},
  {path:"router", component: AllLinksComponent},
  {path:"thankU", component: ThankUComponent},
  {path:"welcome", component: WelcomeComponent},
  {path:"postSearch", component: PostSearchComponent},
  {path:"hopeWeHelped", component: HopeWeHelpedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
