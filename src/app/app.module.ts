import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { RegisterComponent } from './users/register/register.component';
import { MessagesComponent } from './messages/messages/messages.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: '/messages', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // For debugging
    ),
    BrowserModule,
    HttpClientModule,
    
    UsersModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
