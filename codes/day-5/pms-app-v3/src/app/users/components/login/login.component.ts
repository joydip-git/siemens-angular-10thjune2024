import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordValidator } from '../../../validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginFrm = new FormGroup({
  //   username: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',Validators.required)
  // })
  loginFrm: FormGroup;
  constructor(private builder: FormBuilder) {

    this.loginFrm = this.builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    })
  }

  get username() {
    return this.loginFrm.get('username')
  }
  get password() {
    return this.loginFrm.get('password')
  }
  submit() {
    //console.log(this.loginFrm.value);
    console.log(this.loginFrm);
  }

}
