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

  constructor(private http: HttpClient) {}

  messages(): Message[] {
    // Go through proxy server because of CORS
    const url = 'http://localhost:4200/api/messages';
    let messages = [];
    this.http.get<Message[]>(url)
      .subscribe((data: MessageResponse[]) => {
        for (let response of data) {
          messages.push(new Message(response.content));
        }
      });
    return messages;
  }

  sendMessage(message: Message): void {
    // no-op
  }
}

export { AngularMessagesService };
