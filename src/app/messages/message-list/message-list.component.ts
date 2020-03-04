import { Component, OnInit } from '@angular/core';

import { InMemoryMessagesService } from '../in-memory-messages-service';
import { Message } from '../message';
import { messages as messageList } from '../../messages';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [
    { provide: InMemoryMessagesService, useValue: { messages: messageList } }
  ]
})
export class MessageListComponent implements OnInit {
  messages: Message[] = this.messagesService.messages;

  constructor(private messagesService: InMemoryMessagesService) {}

  ngOnInit(): void {
  }

}
