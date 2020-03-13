import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDisplayComponent } from './user-display/user-display.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UserDisplayComponent, UserListComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
