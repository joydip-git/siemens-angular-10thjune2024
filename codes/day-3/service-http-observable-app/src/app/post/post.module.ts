import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from '../services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [PostListComponent],
  providers: [PostService]
})
export class PostModule { }
