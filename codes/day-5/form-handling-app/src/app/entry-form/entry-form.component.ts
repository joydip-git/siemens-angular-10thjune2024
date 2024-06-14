import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.css'
})
export class EntryFormComponent {
  // first = 0
  // second = 0
  // result = 0
  // calculate() {
  //   this.result = Number(this.first) + Number(this.second)
  // }
  result = 0

  calculate(frm: NgForm) {
    const frmGroup: FormGroup = frm.form
    console.log(frmGroup);

    this.result =
      Number(frmGroup.controls['firstInput']?.value) +
      Number(frmGroup.controls['secondInput']?.value)
  }
}
