import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  constructor(private router: Router) {
  }
  logout() {
    sessionStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  get isLoggedIn() {
    return sessionStorage.getItem('token') ? true : false
  }
}
