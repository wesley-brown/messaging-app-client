import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [
    UsersService
  ]
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
    
  }

  ngOnInit(): void {
    this.usersService.users().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
