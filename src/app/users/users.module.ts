import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDisplayComponent } from './user-display/user-display.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserDisplayComponent, UserListComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
