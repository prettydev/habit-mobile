import React, {useContext, useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import {AuthProfile} from './AuthProfile';
import {appContext} from '../../../../store';

export const Profile = ({visible}) => {
    const {
        state: {user},
        dispatch,
    } = useContext(appContext);

    const [authWay, setAuthWay] = useState('login');
    const register = () => {
        setAuthWay('register');
    };

    const logIn = () => {
        setAuthWay('login');
    };

    if (!visible) {
        return null;
    }

    if (user.isEmpty) {
        return (
            <>
                <Login visible={authWay === 'login'} register={register} />
                <Register visible={authWay === 'register'} login={logIn} />
            </>
        );
    }

    return <AuthProfile />;
};
