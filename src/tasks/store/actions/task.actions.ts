import { Action } from '@ngrx/store';

import { Task } from '../../models/task.model';

export const LOAD_TASKS = '[Task] List tasks';
export const LOAD_TASKS_SUCCESS = '[Task] Task load success';
export const LOAD_TASKS_FAIL = '[Task] Task load failed';
export const ADD_TASK = '[Task] Add task';
export const REMOVE_TASK = '[Task] Remove task';
export const SELECT_TASK = '[Task] Select task';
export const GET_TASK = '[Task] Get task';
export const GET_TASK_SUCCESS = '[Task] Get task success';
export const GET_TASK_FAIL = '[Task] Get task fail';

// Action constantit voidaan tehdä myös enumina
// export enum TaskActionTypes {
//     LOAD_TASKS = '[Task] List tasks',
//     LOAD_TASKS_SUCCESS = '[Task] Task load success',
//     LOAD_TASKS_FAIL = '[Task] Task load failed'
// }

export class LoadTasks implements Action {
    readonly type = LOAD_TASKS;
}

export class LoadTasksSuccess implements Action {
    readonly type = LOAD_TASKS_SUCCESS;
    constructor(public payload: Task[]) {}
}

export class LoadTasksFail implements Action {
    readonly type = LOAD_TASKS_FAIL;
}

export class AddTask implements Action {
    readonly type = ADD_TASK;
    constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
    readonly type = REMOVE_TASK;
    constructor(public payload: number) {}
}

export class SelectTask implements Action {
    readonly type = SELECT_TASK;
    constructor(public payload: number) {}
}

export class GetTask implements Action {
    readonly type = GET_TASK;
    constructor(public payload: number) {}
}

export class GetTaskSuccess implements Action {
    readonly type = GET_TASK_SUCCESS;
    constructor(public payload: Task) {}
}

export class GetTaskFail implements Action {
    readonly type = GET_TASK_FAIL;
}

export type TaskActionsUnion =
    LoadTasks |
    LoadTasksSuccess |
    LoadTasksFail |
    AddTask |
    RemoveTask |
    SelectTask |
    GetTask |
    GetTaskSuccess |
    GetTaskFail;