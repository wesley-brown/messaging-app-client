import { InMemoryMessagesService } from './in-memory-messages.service';
import { Message } from './message';

describe('When using messages', function() {

  it('you can send a message', function() {
    const messages = [
      new Message('How are you?')
    ];
    const messagesService = new InMemoryMessagesService(messages);
    messagesService.sendMessage(new Message('Good. How about you?'));
    expect(messagesService.messages()).toEqual([
      new Message('How are you?'),
      new Message('Good. How about you?')
    ]);
  });

});
