import { Task } from './../../models/task.model';
import * as fromActions from '../actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app/app.module';

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    loaded: boolean;
    selectedTask: Task;
}

export const initialState: TaskState = {
    tasks: [
        {
            id: 1,
            name: "Kirjoita raportti",
            creator: "Ville",
            done: false,
            date: new Date(),
            comments: [1, 2]
        }   
    ],
    loading: false,
    loaded: false,
    selectedTask: null
}

export function reducer(state: TaskState = initialState, action: fromActions.TaskActionsUnion): TaskState {
  switch (action.type) {
    case fromActions.LOAD_TASKS: {
        return { ...state, loading: true, loaded: false };
    }

    case fromActions.LOAD_TASKS_SUCCESS: {
        return { ...state, loading: false, loaded: true };
    }

    case fromActions.LOAD_TASKS_FAIL: {
        return { ...state, loading: false, loaded: false};
    }

    case fromActions.ADD_TASK: {
        const id = state.tasks.reduce((t1: Task, t2: Task): any => t1.id > t2.id ? t1.id : t2.id, 0);
        action.payload.id = id + 1;
        const tasks = state.tasks.concat(action.payload);
        return { ...state, tasks };
    }

    case fromActions.REMOVE_TASK: {
        const tasks = state.tasks.filter((task: Task) => task.id != action.payload);
        return { ...state, tasks };
    }

    case fromActions.SELECT_TASK: {
        const selectedTask: Task = state.tasks.find((task: Task) => task.id === action.payload);
        return { ...state, selectedTask };
    }

    default: {
        return state;
    }
  }
}

export const selectTasks = createFeatureSelector<AppState, TaskState>('tasks');
export const selectAllTasks = createSelector(selectTasks, (state: TaskState) => state.tasks);
export const selectSelectedTask = createSelector(selectTasks, (state: TaskState) => state.selectedTask);