import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import CustomNavLink from '../components/CustomNavLink';
import { AuthContext } from '../Context/AuthProvider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppLoader from '../components/AppLoader';

const Signup = () => {
    const { register, googleLogin, pending } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: backgroundStyle.backgroundColor
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.InnerView}>
                <View style={styles.ImageView}>
                    <Image style={styles.SignUpImage} source={require('../assets/images/registration.png')} />
                </View>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: isDarkMode ? colors.white : colors.grey,
                    marginTop: hp(5),
                    marginBottom: hp(4),
                }}>Welcome to Signup!</Text>
                <InputField
                    value={name}
                    onChangeText={setName}
                    label={'Name'}
                    icon={<Ionicons style={{
                        marginRight: wp(3),
                    }} name='person-outline' size={20} color={colors.lightgrey} />}
                />
                <InputField
                    value={email}
                    onChangeText={setEmail}
                    label={'Email Adress'}
                    icon={<MaterialIcons style={{
                        marginRight: wp(3),
                    }} name='alternate-email' size={20} color={colors.lightgrey} />}
                    keyboardType="email-adress"
                />
                <InputField
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    label={'Phone Number'}
                    icon={<MaterialIcons style={{
                        marginRight: wp(3),
                    }} name='local-phone' size={20} color={colors.lightgrey} />}
                    keyboardType="numeric"
                />
                <InputField
                    value={password}
                    onChangeText={setPassword}
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color={colors.lightgrey}
                            style={{ marginRight: wp(3) }}
                        />
                    }
                    inputType="password"
                />
                <InputField
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    label={'Confirm Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color={colors.lightgrey}
                            style={{ marginRight: wp(3) }}
                        />
                    }
                    inputType="password"
                />
                {pending ? <AppLoader /> : null}
                <CustomButton
                    onPress={() => register(email, password)}
                    buttonText={'Signup'}
                />
                <Text style={{
                    color: isDarkMode ? colors.white : colors.grey,
                    textAlign: 'center',
                    marginBottom: hp(4)
                }}>Or, Signup with ....</Text>
                <SocialButton
                    onPress1={() => googleLogin()}
                />
                <CustomNavLink
                    NavText={'Already have an account?'}
                    onPress={() => navigation.navigate('Login')}
                    ButtonText={'Login Here'}
                />
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    InnerView: {
        paddingHorizontal: wp(8),
    },
    ImageView: {
        alignItems: 'center'
    },
    SignUpImage: {
        marginTop: hp(2),
        height: hp('25%'),
        width: wp('75%'),
        transform: [{ rotate: '-5deg' }]
    },
})

export default Signup;