import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Observable, pipe } from 'rxjs';

import * as fromStore from '../../store';
import * as fromReducers from '../../store/reducers';
import * as fromActions from '../../store/actions';

import { Task } from '../../models/task.model'
import { Comment, emptyComment } from '../../models/comment.model';

// FIXME: Cannot read property 'comments' of null.
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

  constructor(private store: Store<fromStore.TaskModuleState>, private route: ActivatedRoute) {
    this.task$ = this.store.pipe(select(fromStore.getSelectedTask));
    this.comments$ = this.store.pipe(select(fromStore.getComments));

    this.taskId = parseInt(this.route.snapshot.paramMap.get('taskId'));
    this.store.dispatch(new fromActions.GetTask(this.taskId));
    this.store.dispatch(new fromActions.ListComments(this.taskId));
  }

  submitComment(): void {
    this.task$.subscribe((task: Task) => this.newComment.task = task.id);
    this.store.dispatch(new fromActions.CreateComment(this.newComment));
    this.newComment = emptyComment();
  }

  likeComment(comment: Comment): void {
    this.store.dispatch(new fromActions.UpdateComment({ ...comment, likes: comment.likes + 1 }));
  }
}