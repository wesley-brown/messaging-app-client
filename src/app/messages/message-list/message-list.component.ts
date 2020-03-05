import { Component, OnInit, Inject } from '@angular/core';

import { Message } from '../message';
import { AngularMessagesService } from '../angular-messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [AngularMessagesService]
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messagesService: AngularMessagesService) {
    this.messages = messagesService.messages();
  }

  ngOnInit(): void {
  }

}
