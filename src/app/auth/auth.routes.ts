import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { VerifyComponent } from './verify/verify.component'

export const AuthRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'change-pwd', component: ChangePasswordComponent },
  { path: 'forgot-pwd', component: ForgotPasswordComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'login', component: LoginComponent },
];
