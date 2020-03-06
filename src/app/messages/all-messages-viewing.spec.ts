import { Message } from './message';
import { InMemoryMessagesService } from './in-memory-messages.service';

describe('When viewing all messages', function() {
  it('all messages are shown', function() {
    const existingMessages = [
      new Message("What's up?"),
      new Message('Not much. How about you?'),
      new Message('Same')
    ];
    const messagesService = new InMemoryMessagesService(existingMessages);
    const expectedMessages = [
      new Message("What's up?"),
      new Message('Not much. How about you?'),
      new Message('Same')
    ];
    const actualMessages = messagesService.messages();
    expect(actualMessages).toEqual(
      jasmine.arrayWithExactContents(expectedMessages));
  });
});
