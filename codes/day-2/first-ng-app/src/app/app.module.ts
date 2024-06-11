import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SampleModule } from "./sample/sample.module";

@NgModule({
    //register components, directives and pipes
    declarations: [AppComponent],

    //mention bootstrapper component(s) name
    bootstrap: [AppComponent],

    //register modules (built-in and feature modules)
    imports: [BrowserModule, SampleModule],

    //register services
    providers: [],

    //mention the name of assets (component, directive, pipe, module, NOT services) thar are exportable to other modules
    exports: []
})
export class AppModule {
    constructor() {
        console.log('App module created');
    }
}