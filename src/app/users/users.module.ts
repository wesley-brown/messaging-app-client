import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDisplayComponent } from './user-display/user-display.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UserDisplayComponent, UserListComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
