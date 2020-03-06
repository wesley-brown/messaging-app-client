import { InMemoryMessagesService } from './in-memory-messages.service';
import { Message } from './message';

describe('When sending a message', function() {
  it('it is put in the list of all messages', function() {
    const existingMessages = [
      new Message('How are you?')
    ];
    const messagesService = new InMemoryMessagesService(existingMessages);
    messagesService.sendMessage(new Message('Good. How about you?'));
    const expectedMessages = [
      new Message('How are you?'),
      new Message('Good. How about you?')
    ];
    const actualMessages = messagesService.messages();
    expect(actualMessages).toEqual(
      jasmine.arrayWithExactContents(expectedMessages));
  });
});
