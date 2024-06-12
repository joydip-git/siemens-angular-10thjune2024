import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData = 100
  receivedNestedData = 0
  updateParentData() {
    this.parentData++
  }
  receiveNestedData(value: number) {
    this.receivedNestedData = value
  }
}
