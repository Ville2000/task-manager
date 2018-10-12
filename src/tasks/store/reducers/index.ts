import * as fromTasks from './task.reducer';
import * as fromComments from './comment.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
    tasks: fromTasks.State;
    comments: fromComments.State;
}

export const reducers: ActionReducerMap<State> = {
    tasks: fromTasks.reducer,
    comments: fromComments.reducer
}

export const getTaskModuleState = createFeatureSelector<State>('tasks');