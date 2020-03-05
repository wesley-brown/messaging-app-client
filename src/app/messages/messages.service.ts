
import { Message } from './message';

/**
 * Manages messages.
 */
interface MessagesService {

  /**
   * The list of messages currently being managed.
   */
  messages(): Message[];

  /**
   * Send a message.
   * @param message The message to send.
   */
  sendMessage(message: Message): void;
}

export { MessagesService };
