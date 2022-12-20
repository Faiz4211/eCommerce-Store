import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../globalStyles/GlobalColor';
import LottieView from 'lottie-react-native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])
    return (
        <View style={styles.container}>
            <LottieView style={styles.SplashImage}
                source={require('../assets/bag3.json')} autoPlay loop />
            {/* <Image style={styles.SplashImage} source={require('../assets/images/purplelogo.png')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.lightpurple
    },
    SplashImage: {
        alignSelf: 'center',
        height: hp('50%'),
        width: wp('100%'),
    },
})

export default Splash;