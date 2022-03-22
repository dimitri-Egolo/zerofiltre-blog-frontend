import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { PasswordResetPageComponent } from './password-reset-page/password-reset-page.component';
import { PasswordRenewalPageComponent } from './password-renewal-page/password-renewal-page.component';
import { AccountConfirmationPageComponent } from './account-confirmation-page/account-confirmation-page.component';
import { ResendConfirmationPageComponent } from './resend-confirmation-page/resend-confirmation-page.component';
import { SocialAuthComponent } from './social-auth/social-auth.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    PasswordResetPageComponent,
    PasswordRenewalPageComponent,
    AccountConfirmationPageComponent,
    ResendConfirmationPageComponent,
    SocialAuthComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
