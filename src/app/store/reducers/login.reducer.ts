import * as fromLoginActions from '../actions/login.actions';

export interface LoginState {
    user: any
}

export const initialLoginState: LoginState = {
    user: null
}

export const reducer = (
    state: LoginState = initialLoginState,
    action: fromLoginActions.LoginActionUnion
): LoginState => {
    switch(action.type) {
        case fromLoginActions.LoginActionTypes.LOGIN_SUCCESS: {
            return { ...state, user: { username: action.payload.username } };
        }

        case fromLoginActions.LoginActionTypes.LOGIN_FAIL: {
            return { ...state, user: null};
        }

        default: {
            return state;
        }
    }
}