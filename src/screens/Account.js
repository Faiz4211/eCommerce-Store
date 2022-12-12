import React, { useContext, } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/CustomButton';
import CustomAdressButton from '../components/CustomAdressButton';
import colors from '../globalStyles/GlobalColor';
import { AuthContext } from '../Context/AuthProvider';

const Account = () => {
    const { user, logout } = useContext(AuthContext)
    console.log('This is user detail', user)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.InnerView}>
                <View style={styles.header}>
                    <Text style={styles.headText}>Profile</Text>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name='setting' size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ImageView}>
                    <Image style={styles.loginImage} source={require('../assets/images/userprofile.png')} />
                    <Text style={styles.name}>{user.email}</Text>
                </View>
                <CustomAdressButton
                    onPress={() => navigation.navigate('Adress')}
                    adressText={'My Adress'}
                />
                <CustomAdressButton
                    adressText={'My Orders'}
                />
                <CustomAdressButton
                    adressText={'Offers'}
                />
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
    container: {
        flex: 1,
    },
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
    name: {
        color: colors.grey,
        marginTop: hp(2),
        fontSize: hp('2%'),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headText: {
        fontSize: hp('2.5%'),
        fontWeight: '600',
        color: colors.grey,
    },
    btn: {
        width: wp('10%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Account;