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

// Other Login methods
export const USER_LOGIN_WITH_GOOGLE = 'USER_LOG_IN_WITH_GOOGLE';
export const USER_LOGIN_WITH_APPLE = 'USER_LOGIN_WITH_APPLE';
export const USER_LOGIN_WITH_FACEBOOK = 'USER_LOGIN_WITH_FACEBOOK';

export const userLogin = payload => ({
    type: USER_LOGIN,
    payload: payload,
});

export const userRegister = payload => ({
    type: USER_REGISTER,
    payload: payload,
});

export const updateProfile = profile => ({
    type: USER_UPDATE_PROFILE,
    payload: profile,
});

export const userLogOut = () => async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    await firebase.auth().signOut();
    getState().nav.reset({index: 0, routes: [{name: 'Home'}]});
};

// Other Login methods
export const userLoginWithGoogle = payload => ({
    type: USER_LOGIN_WITH_GOOGLE,
    payload: payload,
});

export const userLoginLoginWithApple = payload => ({
    type: USER_LOGIN_WITH_APPLE,
    payload: payload,
});

export const userLoginWithFacebook = payload => ({
    type: USER_LOGIN_WITH_FACEBOOK,
    payload: payload,
});
