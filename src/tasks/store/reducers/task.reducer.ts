import * as fromActions from '../actions';
import { Task } from './../../models/task.model';

export interface TaskState {
    entities: Task[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: TaskState = {
    entities: [],
    loading: false,
    loaded: false,
}

export function reducer(state: TaskState = initialState, action: fromActions.TaskActionsUnion): TaskState {
  switch (action.type) {
    case fromActions.LIST_TASKS: {
        return { ...state, loading: true, loaded: false };
    }

    case fromActions.LIST_TASKS_SUCCESS: {
        const entities: Task[] = action.payload;
        return { ...state, loading: false, loaded: true, entities };
    }

    case fromActions.LIST_TASKS_FAIL: {
        return { ...state, loading: false, loaded: false};
    }

    case fromActions.CREATE_TASK_SUCCESS: {
        const entities = state.entities.concat(action.payload);
        return { ...state, entities };
    }

    case fromActions.REMOVE_TASK_SUCCESS: {
        const entities = state.entities.filter((entity: Task) => entity.id !== action.payload);
        console.log('action.payload', action.payload, entities);
        return { ...state, entities };
    }

    case fromActions.CREATE_TASK_FAIL:
    case fromActions.REMOVE_TASK_FAIL:
    default: {
        return state;
    }
  }
}

/** TODO: Näitä funktioita voisi käyttää selektoreissa.
    Kirjoitan selektoreissa nämä funktiot uudelleen. */
// export const getAllTasks = (state: TaskState) => state.tasks;
// export const getSelectedTask = (state: TaskState) => state.selectedTask;