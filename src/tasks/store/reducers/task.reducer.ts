import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app/app.module';

import * as fromActions from '../actions';
import { Task } from './../../models/task.model';

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    loaded: boolean;
    selectedTask: Task;
}

export const initialState: TaskState = {
    tasks: [],
    loading: false,
    loaded: false,
    selectedTask: null
}

export function reducer(state: TaskState = initialState, action: fromActions.TaskActionsUnion): TaskState {
  switch (action.type) {
    case fromActions.LIST_TASKS: {
        return { ...state, loading: true, loaded: false };
    }

    case fromActions.LIST_TASKS_SUCCESS: {
        const tasks: Task[] = action.payload;
        return { ...state, loading: false, loaded: true, tasks };
    }

    case fromActions.LIST_TASKS_FAIL: {
        return { ...state, loading: false, loaded: false};
    }

    case fromActions.SELECT_TASK: {
        const selectedTask: Task = state.tasks.find((task: Task) => task.id === action.payload);
        return { ...state, selectedTask };
    }

    case fromActions.GET_TASK_SUCCESS: {
        const selectedTask: Task = action.payload;
        return { ...state, selectedTask };
    }

    case fromActions.GET_TASK_FAIL: {
        return state;
    }

    case fromActions.CREATE_TASK_SUCCESS: {
        const selectedTask: Task = action.payload;
        const tasks = state.tasks.concat(selectedTask);
        return { ...state, tasks, selectedTask};
    }

    case fromActions.CREATE_TASK_FAIL: {
        return state;
    }

    case fromActions.REMOVE_TASK_SUCCESS: {
        const selectedTask = state.selectedTask && state.selectedTask.id === action.payload.id ? null : state.selectedTask;
        
        return { ...state, selectedTask };
    }

    case fromActions.REMOVE_TASK_FAIL: {
        return state;
    }

    default: {
        return state;
    }
  }
}

export const getTasks = createFeatureSelector<AppState, TaskState>('tasks');
export const getAllTasks = createSelector(getTasks, (state: TaskState) => state.tasks);
export const getSelectedTask = createSelector(getTasks, (state: TaskState) => state.selectedTask);