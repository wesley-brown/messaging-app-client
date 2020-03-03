import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { messages } from '../../messages';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = messages;

  constructor() { }

  ngOnInit(): void {
  }

}
