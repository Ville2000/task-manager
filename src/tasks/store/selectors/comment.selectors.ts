import { createSelector } from '@ngrx/store';

import * as fromFeature from './../reducers';
import * as fromComments from './../reducers/comment.reducer';

export const getCommentState = createSelector(
    fromFeature.getTaskModuleState,
    (state: fromFeature.State) => state.comments
);

export const getComments = createSelector(
    getCommentState,
    (state: fromComments.State) => state.entities
);