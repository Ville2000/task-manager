import { createSelector } from '@ngrx/store';

import * as fromFeature from './../reducers';
import * as fromComments from './../reducers/comment.reducer';

export const getCommentState = createSelector(
    fromFeature.getTaskModuleState,
    (state: fromFeature.TaskModuleState) => state.comments
);

export const getComments = createSelector(
    getCommentState,
    (state: fromComments.CommentState) => state.entities
);