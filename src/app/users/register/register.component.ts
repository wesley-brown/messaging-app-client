import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsersService } from '../users.service';
import { AddUserRequest } from '../add-user-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(formData): void {
    const addUserRequest = new AddUserRequest(formData.email);
    this.usersService.addUser(addUserRequest).subscribe(data => {

    });
  }

}
