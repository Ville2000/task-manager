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
      <!-- <task-comment *ngFor="let comment of (task$ | async).comments"
        [comment]="comment"></task-comment> -->
    </div>
    <!-- <div *ngIf="!((task$ | async).comments)">Ei kommentteja tehtävällä</div> -->
    <comment-form
      [comment]="newComment"
      (submit)="submitComment($event)"></comment-form>
  `
})

export class TaskDetailsComponent {
  private task$: Observable<Task>;

  public newComment: Comment = emptyComment();

  constructor(private store: Store<fromStore.TaskModuleState>, private route: ActivatedRoute) {
    this.task$ = this.store.pipe(select(fromStore.getSelectedTask));
    // TODO:
    // this.comments$ = this.store.pipe(select(getComments()));

    const taskId: number = parseInt(this.route.snapshot.paramMap.get('taskId'));
    this.store.dispatch(new fromActions.GetTask(taskId));
  }

  submitComment(): void {
    console.log('comment', this.newComment);
    this.task$.subscribe((task: Task) => this.newComment.task = task.id);
    this.newComment = emptyComment();
  }
}