import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  filterValue = ''
  @Output('filterTextChanged') filterValueChanged = new EventEmitter<string>()

  changeFilterValue(value: string) {
    this.filterValue = value
    this.filterValueChanged.emit(this.filterValue)
  }
}
