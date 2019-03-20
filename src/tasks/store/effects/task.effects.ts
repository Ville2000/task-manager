import { Injectable } from "@angular/core";

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";

import * as fromActions from '../actions';
import { TaskService } from "src/tasks/services/task.service";
import { Task } from '../../models/task.model';

// RxJS:ssään apuja https://www.learnrxjs.io/

@Injectable()
export class TaskEffects {
    @Effect()
    listTasks$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.LIST_TASKS),
        mergeMap((action: fromActions.ListTasks) =>
            this.taskService.listTasks().pipe(
                map((tasks: Task[]) => (new fromActions.ListTasksSuccess(tasks))),
                catchError(() => of(new fromActions.ListTasksFail()))
            )
        )
    );

    @Effect()
    createTask$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CREATE_TASK),
        mergeMap((action: fromActions.CreateTask) =>
            this.taskService.createTask(action.payload).pipe(
                map((task: Task) => (new fromActions.CreateTaskSuccess(task))),
                catchError(() => of(new fromActions.CreateTaskFail()))
            )
        )
    );

    @Effect()
    removeTask$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.REMOVE_TASK),
        mergeMap((action: fromActions.RemoveTask) =>
            this.taskService.removeTask(action.payload).pipe(
                map(() => (new fromActions.RemoveTaskSuccess(action.payload))),
                catchError(() => of (new fromActions.RemoveTaskFail()))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private taskService: TaskService) {}
}