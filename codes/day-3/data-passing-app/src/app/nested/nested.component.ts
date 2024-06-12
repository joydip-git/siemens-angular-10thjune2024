import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.css'
})
export class NestedComponent {
  @Input() inputData = 0
  @Output() nestedDataChanged = new EventEmitter<number>()
  nestedData = 0

  passValue(value: string) {
    this.nestedData = parseInt(value)
    this.nestedDataChanged.emit(this.nestedData)
  }
}
