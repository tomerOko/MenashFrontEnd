import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { MailProblemComponent } from './components/pages/mail-problem/mail-problem.component';
import { ConnectionProblemComponent } from './components/pages/connection-problem/connection-problem.component';
import { PostSearchComponent } from './components/pages/post-search/post-search.component';
import { LogoComponent } from './components/elements/logo/logo.component';
import { VibeComponent } from './components/elements/vibe/vibe.component';
import { ActionButtonComponent } from './components/elements/action-button/action-button.component';
import { ThankUComponent } from './components/pages/thank-u/thank-u.component';
import { AllLinksComponent } from './components/pages/all-links/all-links.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HopeWeHelpedComponent } from './components/pages/hope-we-helped/hope-we-helped.component';
import { InputBasicComponent } from './components/elements/input-basic/input-basic.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './components/elements/green-button/green-button.component';
import { PostCreateComponent } from './components/pages/post-create/post-create.component';
import { WhatIsUpComponent } from './components/pages/what-is-up/what-is-up.component';
import { CustomInputComponent } from './components/elements/custom-input/custom-input.component';
import { BackButtonComponent } from './components/elements/back-button/back-button.component';
import { MainService } from './services/main_service/main.service';
import { TestInputComponent } from './components/pages/test-input/test-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    WelcomeComponent,
    MailProblemComponent,
    ConnectionProblemComponent,
    PostSearchComponent,
    LogoComponent,
    VibeComponent,
    ActionButtonComponent,
    ThankUComponent,
    AllLinksComponent,
    HomeComponent,
    HopeWeHelpedComponent,
    InputBasicComponent,
    GreenButtonComponent,
    PostCreateComponent,
    WhatIsUpComponent,
    CustomInputComponent,
    BackButtonComponent,
    TestInputComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
