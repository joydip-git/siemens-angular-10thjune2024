import { Component, EventEmitter, Output } from '@angular/core';
import { ResultRepository } from '../repository/result-repo';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  choice = 0
  first = 0
  second = 0
  result = 0

  constructor(private _repo: ResultRepository) {

  }

  @Output() resultCalculated = new EventEmitter<number>()

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
    this._repo.publish(this.result)
    this.resultCalculated.emit(this.result)
  }
}
