import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';


import { AuthRoutes as routes } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent, VerifyComponent]
})
export class AuthModule { }
