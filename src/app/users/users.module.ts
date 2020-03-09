import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayComponent } from './user-display/user-display.component';



@NgModule({
  declarations: [UserDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [UserDisplayComponent]
})
export class UsersModule { }
