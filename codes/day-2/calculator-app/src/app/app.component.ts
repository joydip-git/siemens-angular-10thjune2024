import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  choice = 0
  first = 0
  second = 0
  result = 0

  updateChoice(newChoice: number) {
    this.choice = newChoice
  }
  updateFirst(value: string) {
    this.first = Number(value)
  }
  updateSecond(value: string) {
    this.second = Number(value)
  }
  calculate() {
    switch (this.choice) {
      case 1:
        this.result = this.first + this.second
        break;

      case 2:
        this.result = this.first - this.second
        break;

      case 3:
        this.result = this.first * this.second
        break;

      case 4:
        this.result = this.first / this.second
        break;

      default:
        break;
    }
  }
}
