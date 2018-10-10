import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as fromReducers from '../../store/reducers';
import * as fromActions from '../../store/actions';

import { Task } from '../../models/task.model'
import { Comment, emptyComment } from '../../models/comment.model';

@Component({
  template: `
    <h1>Task Details Works!</h1>
    <div>{{ (task$ | async).name }}</div>
    <div *ngIf="!((task$ | async).length)">Ei kommentteja tehtävällä</div>
    <div *ngFor="let comment of (task$ | async).comments">
      <task-comment [comment]="comment"></task-comment>
    </div>
    <comment-form
      [comment]="newComment"
      (submit)="submitComment($event)">
      </comment-form>
  `
})

export class TaskDetailsComponent {
  private task$: Observable<Task>;

  public newComment: Comment = emptyComment();

  constructor(private store: Store<fromReducers.TaskState>, private route: ActivatedRoute) {
    this.task$ = this.store.pipe(select(fromStore.selectSelectedTask));
    this.store.dispatch(new fromActions.GetTask(parseInt(this.route.snapshot.paramMap.get('taskId'))));
  }

  submitComment(): void {
    console.log('comment', this.newComment);
    this.newComment = emptyComment();
  }
}