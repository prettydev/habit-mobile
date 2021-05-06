import * as Actions from '../actions';

const INITIAL_STATE = {
    loading: false,
    isLoggedIn: false,
    isVerified: false,
    user: {
        name: null,
        email: null,
        phoneNumber: null,
        photoURL: null,
        uid: null,
        createdAt: null,
        aboutMe: null,
    },
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN:
            return {
                ...state,
                loading: true,
            };
        case Actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                isLoggedIn: true,
            };
        case Actions.USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
            };
        case Actions.USER_UPDATE_PROFILE:
            return {
                ...state,
                loading: true,
            };
        case Actions.USER_LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};
