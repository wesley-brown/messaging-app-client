import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { User } from './user';
import { AddUserRequest } from './add-user-request';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  users(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /**
   * Add a new user.
   * @param user The user to add.
   */
  addUser(addUserRequest: AddUserRequest): Observable<User> {
    return this.http.post<User>(this.usersUrl, addUserRequest);
  }

  findUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }
}
