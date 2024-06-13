import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from '../services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PostSortPipe } from './pipes/post-sort.pipe';

@NgModule({
  //registering components, pipes and directives ONLY
  declarations: [PostListComponent, PostDetailComponent, PostSortPipe],
  //imports modules
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [PostListComponent],

  //regisreting services ONLY
  providers: [PostService]
})
export class PostModule { }
