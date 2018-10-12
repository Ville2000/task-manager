import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, tap, take, switchMap, map } from 'rxjs/operators';

import * as fromStore from '../store';
import { Task } from '../models/task.model';

@Injectable()
export class TaskGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}
  
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.taskId, 10);
        return this.hasTask(id);
      })
    );
  }

  hasTask(id: number): Observable<boolean> {
    return this.store.select(fromStore.getTasks).pipe(
      map((tasks: Task[]) => tasks.some((task: Task) => task.id === id)),
      take(1)
    );
  }

  // Guardeja pitää hanskata jonkin verran, jotta paras hyöty
  // Tarkistaa, onko tehtävät ladatattu. Jos eivät, lataa ne
  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getTasksLoaded).pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(new fromStore.ListTasks());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}