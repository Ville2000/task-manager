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
        ofType(fromActions.LOAD_TASKS),
        mergeMap((action: fromActions.LoadTasks) =>
            this.taskService.listTasks().pipe(
                map((tasks: Task[]) => (new fromActions.LoadTasksSuccess(tasks))),
                catchError(() => of(new fromActions.LoadTasksFail()))
            )
        )
    );

    // TODO: Hae by id
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

    constructor(
        private actions$: Actions,
        private taskService: TaskService) {}
}