import React from 'react';

import AwesomeLoading from 'react-native-awesome-loading';
import {useTheme} from 'react-native-paper';

export const Loading = ({active}) => {
    const theme = useTheme();

    return (
        <AwesomeLoading
            indicatorId={6}
            size={60}
            isActive={active}
            textStyle={{
                color: theme.colors.default,
                fontFamily: theme.fonts.regular,
                fontSize: theme.fontSizes.extraLarge,
            }}
            text="Loading..."
        />
    );
};
