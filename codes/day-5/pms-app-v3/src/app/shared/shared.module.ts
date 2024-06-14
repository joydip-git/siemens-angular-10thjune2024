import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from '../routes/routes';

@NgModule({
  declarations: [
    HomeComponent,
    DashBoardComponent,
    PageNotFoundComponent
  ],
  exports: [DashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(sharedRoutes)
  ]
})
export class SharedModule { }
