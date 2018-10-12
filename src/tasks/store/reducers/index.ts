import * as fromTasks from './task.reducer';
import * as fromComments from './comment.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface TaskModuleState {
    tasks: fromTasks.TaskState;
    comments: fromComments.CommentState;
}

export const reducers: ActionReducerMap<TaskModuleState> = {
    tasks: fromTasks.reducer,
    comments: fromComments.reducer
}

export const getTaskModuleState = createFeatureSelector<TaskModuleState>('tasks');