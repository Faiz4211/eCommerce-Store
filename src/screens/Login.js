import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
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

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation();
    const { login, googleLogin, pending } = useContext(AuthContext);
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
            <View style={styles.InnerView}>
                <View style={styles.ImageView}>
                    <Image style={styles.loginImage} source={require('../assets/images/login.png')} />
                </View>
                <Text style={{
                    color: isDarkMode ? colors.white : colors.grey,
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    marginTop: hp(5),
                    marginBottom: hp(4),
                }}>Welcome to Login!</Text>
                <InputField
                    value={email}
                    onChangeText={setEmail}
                    label={'Email Adress'}
                    icon={<MaterialIcons style={{
                        marginRight: wp(3),
                    }} name='alternate-email' size={20} color={isDarkMode ? colors.white : colors.lightgrey} />}
                />
                <InputField
                    value={password}
                    onChangeText={setPassword}
                    label={'Password'}
                    inputType="password"
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            // color={colors.lightgrey}
                            color={isDarkMode ? colors.white : colors.lightgrey}
                            style={{ marginRight: wp(3) }}
                        />
                    }
                />
                {pending ? <AppLoader /> : null}
                <CustomButton
                    onPress={() => { login(email, password) }}
                    buttonText={'Login'}
                />
                <Text style={{
                    color: isDarkMode ? colors.white : colors.grey,
                    textAlign: 'center',
                    marginBottom: hp(4)
                }}>Or, Login with ....</Text>

                <SocialButton
                    onPress1={() => googleLogin()}
                />
                <CustomNavLink
                    NavText={'New to the App?'}
                    onPress={() => navigation.navigate('Signup')}
                    ButtonText={'Signup Here'}
                />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    loginImage: {
        height: hp('25%'),
        width: wp('75%'),
        transform: [{ rotate: '-5deg' }]
    },
    InnerView: {
        paddingHorizontal: wp(8),
    },
    ImageView: {
        alignItems: 'center'
    },
})

export default Login;