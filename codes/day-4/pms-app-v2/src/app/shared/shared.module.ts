import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashBoardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
