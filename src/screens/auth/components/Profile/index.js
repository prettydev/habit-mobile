import React, {useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import {useSelector} from 'react-redux';
import {AuthProfile} from './AuthProfile';

export const Profile = ({visible}) => {
    const [authWay, setAuthWay] = useState('login');
    const authUser = useSelector(state => state.firebase.profile);
    const register = () => {
        setAuthWay('register');
    };

    const logIn = () => {
        setAuthWay('login');
    };

    if (!visible) {
        return null;
    }

    if (authUser.isEmpty) {
        return (
            <>
                <Login visible={authWay === 'login'} register={register} />
                <Register visible={authWay === 'register'} login={logIn} />
            </>
        );
    }

    return <AuthProfile />;
};
