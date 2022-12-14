import React, { useContext, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import colors from '../globalStyles/GlobalColor';
import TabStack from './TabStack';
import { AuthContext } from '../Context/AuthProvider';
import auth from '@react-native-firebase/auth';


const AppNav = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={colors.purple} />
    </View>

    // const { isLoading, userToken } = useContext(AuthContext);

    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size={'large'} />
    //         </View>
    //     )
    // }
    return (
        <NavigationContainer >
            {user ? <TabStack /> : <AuthStack />}
            {/* // {userToken !== null ? <TabStack /> : <AuthStack />} */}
        </NavigationContainer>
    )
}

export default AppNav;