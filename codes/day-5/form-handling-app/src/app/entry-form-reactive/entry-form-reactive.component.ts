import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry-form-reactive',
  templateUrl: './entry-form-reactive.component.html',
  styleUrl: './entry-form-reactive.component.css'
})
export class EntryFormReactiveComponent {
  result = 0
  // firstInput = new FormControl(0)
  // secondInput = new FormControl(0)

  calculatorForm = new FormGroup({
    firstInput: new FormControl(0),
    secondInput: new FormControl(0)
  })

  get first() {
    return this.calculatorForm.get('firstInput')
  }

  get second() {
    return this.calculatorForm.get('secondInput')
  }

  calculate() {
    // this.result = Number(this.firstInput.value) + Number(this.secondInput.value)
    this.result = Number(this.first?.value) + Number(this.second?.value)
  }
}
