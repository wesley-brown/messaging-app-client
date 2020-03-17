import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AngularMessagesService } from '../angular-messages.service';
import { Message } from '../message';
import { UsersService } from 'src/app/users/users.service';
import { User } from 'src/app/users/user';

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
    private messagesService: AngularMessagesService,
    private usersService: UsersService
  ) { 
    this.messageForm = this.formBuilder.group({
      content: '',
      senderId: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(messageData): void {
    this.usersService.findUserById(messageData.senderId).subscribe(data => {
      console.log(data);
      const sender = new User(data.id, data.email);
      const message = new Message(messageData.content, sender);
      this.messagesService.sendMessage(message);
    });
  }

}
