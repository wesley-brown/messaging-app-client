import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Message } from './message';
import { MessagesService } from './messages.service';

class MessageResponse {
  id: number;
  content: string;
  sender: { id: number; email: string; };
  receiver: { id: number; email: string };
}

@Injectable()
class AngularMessagesService implements MessagesService {
  private messagesUrl = environment.apiUrl + '/messages';

  constructor(private http: HttpClient) {}

  messages(): Message[] {
    let messages = [];
    this.http.get<Message[]>(this.messagesUrl)
      .subscribe((data: MessageResponse[]) => {
        for (let response of data) {
          messages.push(new Message(response.content, response.sender));
        }
      });
    return messages;
  }

  sendMessage(message: Message): void {
    console.log(message);
    this.http.post<Message>(this.messagesUrl, {
      senderId: message.sender.id,
      receiverId: 2,
      content: message.content
    })
    .subscribe(data => {}); // subscribe must be called
  }
}

export { AngularMessagesService };
