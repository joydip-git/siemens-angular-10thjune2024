import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  //providers: [PostService]
})
export class PostDetailComponent implements OnChanges, OnDestroy {
  @Input() selectedId = 0
  selectedPost?: Post;
  errorMessage = ''
  isFetchOver = false
  private postSub?: Subscription;

  constructor(private ps: PostService) {

  }
  ngOnDestroy(): void {
    this.postSub?.unsubscribe()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedId > 0) {
      this.postSub = this.ps
        .getPost(this.selectedId)
        .subscribe({
          next: (post) => {
            this.selectedPost = post
            this.isFetchOver = true
            this.errorMessage = ''
          },
          error: (err) => {
            this.selectedPost = undefined
            this.isFetchOver = true
            this.errorMessage = err.message
          }
        })

    }
  }
}
