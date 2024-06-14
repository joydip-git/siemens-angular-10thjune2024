import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnDestroy {

  private regSub?: Subscription;

  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.regSub?.unsubscribe()
  }
  submit(frm: NgForm) {
    const user = <User>frm.form.value
    if (window.confirm('would you like to submit?')) {
      this.regSub = this.userSvc.register(user).subscribe(
        {
          next: (response) => {
            if (response.data !== null) {
              this.router.navigate(['/login'])
            } else
              window.alert(response.message)
          },
          error: (err) => {
            window.alert(err.message)
          }
        }
      )
    }
  }
}
