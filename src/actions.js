export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_UPDATE_PROFILE = 'USER_UPDATE_PROFILE';
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
export const USER_UPDATE_PROFILE_FAILED = 'USER_UPDATE_PROFILE_FAILED';

export const userLogin = _ => ({
    type: USER_LOGIN,
});

export const userLoginSuccess = payload => ({
    type: USER_LOGIN_SUCCESS,
    payload: payload,
});

export const userLoginError = _ => ({
    type: USER_LOGIN_ERROR,
});

export const userRegister = payload => ({
    type: USER_REGISTER,
    payload: payload,
});

export const updateProfile = profile => ({
    type: USER_UPDATE_PROFILE,
    payload: profile,
});

export const userLogOut = () => async (dispatch, getState) => {
    getState().nav.reset({index: 0, routes: [{name: 'Home'}]});
};
