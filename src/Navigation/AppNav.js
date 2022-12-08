import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabStack from './TabStack';
import { AuthContext } from '../Context/AuthContext';

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    return (
        <NavigationContainer>
            {userToken !== null ? <TabStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav;