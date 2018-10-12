import { Action } from '@ngrx/store';

import { Task } from '../../models/task.model';

export const LIST_TASKS = '[Task] List tasks';
export const LIST_TASKS_SUCCESS = '[Task] List tasks success';
export const LIST_TASKS_FAIL = '[Task] List tasks failed';

export const REMOVE_TASK = '[Task] Remove task';
export const REMOVE_TASK_SUCCESS = '[Task] Remove task success';
export const REMOVE_TASK_FAIL = '[Task] Remove task fail';

export const CREATE_TASK = '[Task] Create task';
export const CREATE_TASK_SUCCESS = '[Task] Create task success';
export const CREATE_TASK_FAIL = '[Task] Create task fail';

// Action constantit voidaan tehdä myös enumina
// export enum TaskActionTypes {
//     LOAD_TASKS = '[Task] List tasks',
//     LOAD_TASKS_SUCCESS = '[Task] Task load success',
//     LOAD_TASKS_FAIL = '[Task] Task load failed'
//     jne...
// }

export class ListTasks implements Action {
    readonly type = LIST_TASKS;
}

export class ListTasksSuccess implements Action {
    readonly type = LIST_TASKS_SUCCESS;
    constructor(public payload: Task[]) {}
}

export class ListTasksFail implements Action {
    readonly type = LIST_TASKS_FAIL;
}

export class RemoveTask implements Action {
    readonly type = REMOVE_TASK;
    constructor(public payload: number) {}
}

export class RemoveTaskSuccess implements Action {
    readonly type = REMOVE_TASK_SUCCESS;
    constructor(public payload: number) {}
}

export class RemoveTaskFail implements Action {
    readonly type = REMOVE_TASK_FAIL;
}

export class CreateTask implements Action {
    readonly type = CREATE_TASK;
    constructor(public payload: Task) {}
}

export class CreateTaskSuccess implements Action  {
    readonly type = CREATE_TASK_SUCCESS;
    constructor(public payload: Task) {}
}

export class CreateTaskFail implements Action {
    readonly type = CREATE_TASK_FAIL;
}

export type TaskActionsUnion =
    | ListTasks
    | ListTasksSuccess
    | ListTasksFail
    | RemoveTask
    | RemoveTaskSuccess
    | RemoveTaskFail
    | CreateTask
    | CreateTaskSuccess
    | CreateTaskFail;