import { createSelector } from '@ngrx/store';

import * as fromFeature from './../reducers';
import * as fromTasks from './../reducers/task.reducer';

export const getTaskState = createSelector(
    fromFeature.getTaskModuleState,
    (state: fromFeature.TaskModuleState) => state.tasks
);

export const getTasks = createSelector(
    getTaskState,
    (state: fromTasks.TaskState) => state.tasks
);

export const getSelectedTask = createSelector(
    getTaskState,
    (state: fromTasks.TaskState) => state.selectedTask
);