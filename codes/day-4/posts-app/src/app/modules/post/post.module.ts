import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from '../../services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PostSortPipe } from './pipes/post-sort.pipe';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent, PostSortPipe, UpdatePostComponent, AddPostComponent],
  //imports modules
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [PostListComponent],

  //regisreting services ONLY
  providers: [PostService]
})
export class PostModule { }
