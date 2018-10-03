import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as fromReducers from '../../store/reducers';
import { Task } from '../../models/task.model'

@Component({
  template: `
    <h1>Task Details Works!</h1>
    <div>{{ (task$ | async).name }}</div>

    <div *ngIf="!((task$ | async).length)">Ei kommentteja tehtävällä</div>
    <div *ngFor="let comment of (task$ | async).comments">
      TODO: Kommentti-komponentti
    </div>
  `
})

export class TaskDetailsComponent {
  private task$: Observable<Task>;

  constructor(private store: Store<fromReducers.TaskState>, private router: Router) {
    this.task$ = this.store.pipe(select(fromStore.selectSelectedTask));
  }
}