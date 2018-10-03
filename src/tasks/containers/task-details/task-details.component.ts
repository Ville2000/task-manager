import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromReducers from '../../store/reducers';
import { Task } from '../../models/task.model'
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Task Details Works!</h1>
    <p>{{ (task$ | async).name }}</p>
  `
})

export class TaskDetailsComponent {
  private task$: Observable<Task>;

  constructor(private store: Store<fromReducers.TaskState>, private router: Router) {
    this.task$ = this.store.pipe(select(fromStore.selectSelectedTask));
  }
}