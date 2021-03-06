import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageFormComponent } from './message-form/message-form.component';

import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [MessageComponent, MessageListComponent, MessagesComponent, MessageFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersModule
],
  exports: [MessagesComponent]
})
export class MessagesModule { }
