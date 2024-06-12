import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result = 0
  show = false
  receiveResult(value: number) {
    this.result = value
    this.show = true
  }
  changeShow() {
    this.show = !this.show
  }
}
