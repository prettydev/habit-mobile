import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {MenuList} from "./MenuList";
import {Support} from "./Support";

export const Menu = ({visible}) => {
    const [menu, setMenu] = useState('home');
    
    
    const onSupportTapped = () => {
        setMenu('support')
    }
    
    const backToMenuHome = () => {
    
        setMenu('home')
    }
    
    if(!visible) {
        return null;
    }

    return (
        <>
          <MenuList visible={menu==='home'} onSupportTapped={onSupportTapped}/>
          <Support visible={menu==='support'} backToMenuHome={backToMenuHome}/>
        </>
    );
};
