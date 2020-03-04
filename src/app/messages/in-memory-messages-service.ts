import { Message } from './message';

/**
 * Manages messages in-memory.
 */
class InMemoryMessagesService {

  /**
   * The list of messages currently being managed.
   */
  messages: Message[];

  /**
   * @param messages A list of existing messages to manage.
   */
  constructor(messages: Message[]) {
    this.messages = messages;
  }

  /**
   * Send a message.
   * @param message The message to send.
   */
  sendMessage(message: Message): void {
    this.messages.push(message);
  }
}

export { InMemoryMessagesService };
