import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordValidator } from '../../../validators/password-validator';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  // loginFrm = new FormGroup({
  //   username: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',Validators.required)
  // })
  loginFrm: FormGroup;
  private loginSub?: Subscription;

  constructor(
    private builder: FormBuilder,
    private userSvc: UserService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {

    this.loginFrm = this.builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    })
  }
  ngOnDestroy(): void {
    this.loginSub?.unsubscribe()
  }

  get username() {
    return this.loginFrm.get('username')
  }
  get password() {
    return this.loginFrm.get('password')
  }
  submit() {
    const user = <User>this.loginFrm.value
    if (window.confirm('want to submit?')) {
      this.loginSub = this.userSvc.login(user).subscribe({
        next: (response) => {
          if (response.data !== null) {
            window.alert(response.message)
            //save the token
            sessionStorage.setItem('token', response.data)
          } else
            window.alert(response.message)
        },
        error: (err) => {
          window.alert(err.message)
        },
        complete: () => {
          //redirect
          const snapshot = this.currentRoute.snapshot
          const returnUrl = snapshot.queryParams["returnUrl"]
          if (returnUrl && returnUrl !== '') {
            this.router.navigate([returnUrl])
          } else {
            this.router.navigate(['/products'])
          }
        }
      })
    }
  }

}
