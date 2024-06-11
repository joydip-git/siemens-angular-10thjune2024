import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html'
})
export class SampleComponent {
    names = ['anil', 'sunil']
    show = false
    person = {
        id: 1,
        name: 'joy',
        salary: 1000
    }
}