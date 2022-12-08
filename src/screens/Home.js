import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
    const { logout } = useContext(AuthContext)
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is home</Text>
            <TouchableOpacity
                onPress={() => { logout() }}
                style={{ backgroundColor: '#ddd' }}>
                <Text style={{ fontSize: 40, }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;