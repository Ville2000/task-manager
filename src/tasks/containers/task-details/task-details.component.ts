import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

import { Task } from '../../models/task.model'
import { Comment, emptyComment } from '../../models/comment.model';

@Component({
  styleUrls: ['./task-details.component.css'],
  template: `
    <h2>{{ (task$ | async).name }}</h2>
    <div class="comment-list">
      <h3>Kommentit:</h3>
      <task-comment *ngFor="let comment of (comments$ | async)"
        (click)="likeComment(comment)"
        [comment]="comment"></task-comment>
    </div>
    <div *ngIf="!((comments$ | async).length)">Ei kommentteja tehtävällä</div>
    <comment-form
      [comment]="newComment"
      (submit)="submitComment($event)"></comment-form>
  `
})

export class TaskDetailsComponent {
  private taskId: number;
  private task$: Observable<Task>;
  private comments$: Observable<Comment[]>;

  public newComment: Comment = emptyComment();

  constructor(
    private store: Store<fromStore.State>,
    private route: ActivatedRoute
  ) {
    this.task$ = this.store.pipe(select(fromStore.getSelectedTask));
    this.comments$ = this.store.pipe(select(fromStore.getComments));

    this.taskId = parseInt(this.route.snapshot.paramMap.get('taskId'));
    this.store.dispatch(new fromStore.ListComments(this.taskId));
  }

  submitComment(): void {
    this.newComment.task = this.taskId;
    this.store.dispatch(new fromStore.CreateComment(this.newComment));
    this.newComment = emptyComment();
  }

  likeComment(comment: Comment): void {
    this.store.dispatch(new fromStore.UpdateComment({ ...comment, likes: comment.likes + 1 }));
  }
}