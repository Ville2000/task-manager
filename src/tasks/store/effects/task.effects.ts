import { Injectable } from "@angular/core";

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";

import * as fromActions from '../actions';
import { TaskService } from "src/tasks/services/task.service";
import { Task } from '../../models/task.model';

// RxJS:ssään apuja https://www.learnrxjs.io/

// TODO: Täällä hoidetaan side effectit.
@Injectable()
export class TaskEffects {
    // TODO: Effecti voi kuunnella samaa tyyppiä, joka on selektoituna jossai komponentissa.
    // Kuunnellaan moduulin kautta
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
    loadTaskById$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.GET_TASK),
        mergeMap((action: fromActions.GetTask) =>
            this.taskService.getTaskById(action.payload).pipe(
                // Jos success, dispatch success
                map((task: Task) => (new fromActions.GetTaskSuccess(task))),
                // Jos fail, dispatch fail
                catchError(() => of(new fromActions.GetTaskFail()))
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
                map((task: Task) => (new fromActions.RemoveTaskSuccess(task))),
                catchError(() => of (new fromActions.RemoveTaskFail()))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private taskService: TaskService) {}
}