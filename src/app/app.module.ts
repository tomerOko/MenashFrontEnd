import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TestComponent } from './components/test/test.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { MailProblemComponent } from './components/pages/mail-problem/mail-problem.component';
import { ConnectionProblemComponent } from './components/pages/connection-problem/connection-problem.component';
import { PostSearchComponent } from './components/pages/post-search/post-search.component';
import { LogoComponent } from './components/elements/logo/logo.component';
import { VibeComponent } from './components/elements/vibe/vibe.component';
import { LoginGoggleComponent } from './components/elements/login-goggle/login-goggle.component';
import { ActionButtonComponent } from './components/elements/action-button/action-button.component';
import { ThankUComponent } from './components/pages/thank-u/thank-u.component';
import { AllLinksComponent } from './components/pages/all-links/all-links.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HopeWeHelpedComponent } from './components/pages/hope-we-helped/hope-we-helped.component';
import { InputBasicComponent } from './components/elements/input-basic/input-basic.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './components/elements/green-button/green-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TestComponent,
    WelcomeComponent,
    MailProblemComponent,
    ConnectionProblemComponent,
    PostSearchComponent,
    LogoComponent,
    VibeComponent,
    LoginGoggleComponent,
    ActionButtonComponent,
    ThankUComponent,
    AllLinksComponent,
    HomeComponent,
    HopeWeHelpedComponent,
    InputBasicComponent,
    TestServiceComponent,
    GreenButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
