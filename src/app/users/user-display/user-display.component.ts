import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  user: User = new User(1, 'user1@example.com');

  constructor() { }

  ngOnInit(): void {
  }

}
