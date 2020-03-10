import { Component } from '@angular/core';

import { User } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messaging-app-client';
  users = [
    new User(1, 'user1@example.com'),
    new User(2, 'user2@example.com')
  ];
}
