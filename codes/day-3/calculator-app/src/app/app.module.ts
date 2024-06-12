import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultRepository } from './repository/result-repo';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResultRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
