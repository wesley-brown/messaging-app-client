import { User } from '../users/user';

export class Message {
  readonly content: string;
  readonly sender: User;

  constructor(content: string, sender: User) {
    this.content = content;
    this.sender = sender;
  }
}
