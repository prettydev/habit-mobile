import React, {createContext, useReducer} from 'react';
import {USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_UPDATE_PROFILE} from './actions';
import {navigationRef} from './navigator';

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
    nav: navigationRef.current,
};

export const appContext = createContext({
    state: INITIAL_STATE,
    dispatch: () => null,
});

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case USER_LOGIN:
                return {
                    ...state,
                    loading: true,
                };
            case USER_LOGIN_SUCCESS:
                return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    isLoggedIn: true,
                };
            case USER_LOGIN_ERROR:
                return {
                    ...state,
                    loading: false,
                };
            case USER_UPDATE_PROFILE:
                return {
                    ...state,
                    loading: true,
                };
            case USER_LOGOUT:
                return INITIAL_STATE;
            default:
                return state;
        }
    }, INITIAL_STATE);

    return <appContext.Provider value={{state, dispatch}}>{children}</appContext.Provider>;
};
