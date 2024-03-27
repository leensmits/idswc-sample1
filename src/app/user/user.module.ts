import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { UsersRolesComponent } from './users-roles/users-roles.component';


@NgModule({
  declarations: [
    AuthComponent,
    UsersRolesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { } 
