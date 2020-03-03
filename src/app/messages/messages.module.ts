import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
  declarations: [MessageComponent, MessageListComponent],
  imports: [CommonModule],
  exports: [MessageListComponent]
})
export class MessagesModule { }
