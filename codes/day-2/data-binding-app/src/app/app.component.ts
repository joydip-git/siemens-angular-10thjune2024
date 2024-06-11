import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to Angular Data Binding';
  width = 500

  changeTitle(newTitle: string) {
    this.title = newTitle
    // for (let name of this.names) {
    //   console.log(value);
    // }
  }
}
