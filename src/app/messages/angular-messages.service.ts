import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  // Go through proxy server because of CORS
  private url = 'http://localhost:4200/api/'

  constructor(private http: HttpClient) {}

  messages(): Message[] {
    let messages = [];
    this.http.get<Message[]>(this.url + 'messages')
      .subscribe((data: MessageResponse[]) => {
        for (let response of data) {
          messages.push(new Message(response.content));
        }
      });
    return messages;
  }

  sendMessage(message: Message): void {
    this.http.post<Message>(this.url + 'messages', {
      senderId: 1,
      receiverId: 2,
      content: message.content
    })
    .subscribe(data => {}); // subscribe must be called
  }
}

export { AngularMessagesService };
