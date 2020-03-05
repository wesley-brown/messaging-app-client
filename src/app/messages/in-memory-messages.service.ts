import { Inject, Injectable } from '@angular/core';
import { Message } from './message';
import { MessagesService } from './messages.service';

/**
 * Manages messages in-memory.
 */
@Injectable({
  providedIn: 'root'
})
class InMemoryMessagesService implements MessagesService {
  private _messages: Message[];

  /**
   * @param messages A list of existing messages to manage.
   */
  constructor(@Inject('messages') messages: Message[]) {
    this._messages = messages;
  }

  messages(): Message[] {
    return this._messages;
  }

  sendMessage(message: Message): void {
    this._messages.push(message);
  }
}

export { InMemoryMessagesService };
