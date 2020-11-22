import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TestComponent } from './components/test/test.component';
import { from } from 'rxjs';
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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
