import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../globalStyles/GlobalColor';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.SplashImage} source={require('../assets/images/purplelogo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    SplashImage: {
        height: hp('40%'),
        width: wp('100%'),
    }
})

export default Splash;