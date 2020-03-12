import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  users(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
