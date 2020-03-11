import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  users(): User[] {
    let users = [];
    this.http.get<User[]>(this.usersUrl)
      .subscribe((receivedUsers: User[]) => {
        for (const user of receivedUsers) {
          users.push(user);
        }
      });
    return users;
  }
}
