import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from './../reducers';
import * as fromTasks from './../reducers/task.reducer';

import { Task } from '../../models/task.model';

export const getTaskState = createSelector(
    fromFeature.getTaskModuleState,
    (state: fromFeature.TaskModuleState) => state.tasks
);

export const getTasks = createSelector(
    getTaskState,
    (state: fromTasks.TaskState) => state.tasks
);

export const getSelectedTask = createSelector(
    getTasks,
    fromRoot.getRouterState,
    (tasks, router): Task => {
        const taskId = parseInt(router.state.params.taskId, 10);
        return router.state &&
            tasks.find((task: Task) => task.id === taskId);
    }
);

export const getTasksLoaded = createSelector(
    getTaskState,
    (state: fromTasks.TaskState) => state.loaded
);