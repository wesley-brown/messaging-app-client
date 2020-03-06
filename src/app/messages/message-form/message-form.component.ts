import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AngularMessagesService } from '../angular-messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css'],
  providers: [FormBuilder, AngularMessagesService]
})
export class MessageFormComponent implements OnInit {
  messageForm;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: AngularMessagesService
  ) { 
    this.messageForm = this.formBuilder.group({
      content: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(messageData): void {
    const message = new Message(messageData.content);
    this.messagesService.sendMessage(message);
  }

}
