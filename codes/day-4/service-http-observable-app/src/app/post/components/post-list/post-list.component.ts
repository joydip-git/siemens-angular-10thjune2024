import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  //providers: [PostService]
})
export class PostListComponent implements OnInit, OnDestroy {
  postRecords?: Post[];
  selectedPostId = 0
  errorMessage = ''
  isFetchOver = false
  sortChoice = 0

  private postSubscription?: Subscription;

  constructor(private ps: PostService) {

  }
  updateSortChoice(value: number) {
    this.sortChoice = value
  }
  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe()
  }
  setSelectedId(value: number) {
    this.selectedPostId = value
  }
  ngOnInit(): void {
    this.postSubscription =
      this.ps
        .getPosts()
        .subscribe({
          next: (records) => {
            this.postRecords = records.slice(0, 3)
            this.errorMessage = ''
            this.isFetchOver = true
          },
          error: (err) => {
            this.postRecords = undefined
            this.errorMessage = err.message
            this.isFetchOver = true
          }
        })
  }
}
