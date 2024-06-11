import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [SampleComponent],
    exports: [SampleComponent],
    imports: [CommonModule]
})
export class SampleModule {

}