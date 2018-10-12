import * as fromActions from '../actions/comment.actions';
import { CommentActionsUnion } from '../actions/comment.actions';
import { Comment } from '../../models/comment.model';

export interface CommentState {
    entities: Comment[]
}

export const initialState: CommentState = {
    entities: []
}

export function reducer(
    state: CommentState = initialState,
    action: CommentActionsUnion
    ): CommentState {
    switch(action.type) {
        case fromActions.LIST_COMMENTS_SUCCESS: {
            const entities: Comment[] = action.payload;
            return { ...state, entities };
        }

        case fromActions.ALTER_COMMENT_SUCCESS: {
            const comment: Comment = action.payload;
            const entities = state.entities
                .filter(comment => comment.id !== action.payload.id)
                .concat(comment);
            return { ...state, entities};
        }
        
        case fromActions.ALTER_COMMENT_FAIL:
        default: {
            return state;
        }
    }
}