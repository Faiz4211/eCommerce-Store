import React, { useContext, } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/CustomButton';
import CustomAdressButton from '../components/CustomAdressButton';
import colors from '../globalStyles/GlobalColor';
import { AuthContext } from '../Context/AuthProvider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppLoader from '../components/AppLoader';

const Account = () => {
    const { user, logout, pending } = useContext(AuthContext);
    console.log('This is user detail', user);
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{ flex: 1, backgroundColor: backgroundStyle.backgroundColor }}>
            <View style={styles.InnerView}>
                <View style={styles.header}>
                    <Text style={{
                        fontSize: hp('2.5%'),
                        fontWeight: '600',
                        color: isDarkMode ? colors.white : colors.grey
                    }}>Profile</Text>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name='setting' size={25} color={isDarkMode ? colors.white : colors.lightgrey} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ImageView}>
                    <Image style={styles.loginImage} source={require('../assets/images/userprofile.png')} />
                    <Text style={{
                        color: isDarkMode ? colors.white : colors.lightgrey,
                        marginTop: hp(2),
                        fontSize: hp('2.5%'),
                        fontWeight: '600'
                    }}>{user.email}</Text>
                </View>
                <CustomAdressButton
                    onPress={() => navigation.navigate('MyAdress')}
                    adressText={'My Adress'}
                />
                <CustomAdressButton
                    adressText={'My Orders'}
                />
                <CustomAdressButton
                    adressText={'Offers'}
                />
                {pending ? <AppLoader /> : null}
                <View style={{
                    marginTop: hp(4)
                }}>
                    <CustomButton
                        onPress={() => logout()}
                        buttonText={'Sign Out'}
                    />
                </View>

            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    loginImage: {
        marginTop: hp(2),
        height: hp('25%'),
        width: wp('75%'),
    },
    InnerView: {
        paddingHorizontal: wp(8),
    },
    ImageView: {
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headText: {

    },
    btn: {
        width: wp('10%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Account;