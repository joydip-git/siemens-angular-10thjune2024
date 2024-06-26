import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userRoutes } from '../routes/routes';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(userRoutes)
  ],
  providers: [UserService]
})
export class UsersModule { }
