import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import CustomNavLink from '../components/CustomNavLink';
import { AuthContext } from '../Context/AuthContext';

const Signup = () => {
    const { Signup } = useContext(AuthContext)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    // const [date, setDate] = useState(new Date());
    // const [open, setOpen] = useState(false);
    // const [dobLabel, setDobLabel] = useState('Date of Birth')
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.InnerView}>
                <View style={styles.ImageView}>
                    <Image style={styles.SignUpImage} source={require('../assets/images/registration.png')} />
                </View>
                <Text style={styles.SignupText}>Welcome to Signup!</Text>
                <InputField
                    value={name}
                    onChangeText={setName}
                    label={'Full Name'}
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
                {/* <View style={styles.CalendarView}>
                    <Ionicons
                        name="calendar-outline"
                        size={20}
                        color={colors.lightgrey}
                        style={{ marginRight: wp(3) }}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={styles.DOBText}>{dobLabel}</Text>
                    </TouchableOpacity>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode={'date'}
                    minimumDate={new Date('1980-01-01')}
                    maximumDate={new Date('2022-01-01')}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setDobLabel(date.toDateString())
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                /> */}
                <CustomButton
                    onPress={() => { Signup(name, email, password, confirmPassword) }}
                    buttonText={'Signup'}
                />
                <Text style={styles.RefText}>Or, Signup with ....</Text>
                <SocialButton />
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
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    SignupText: {
        fontSize: hp('3%'),
        fontWeight: '600',
        color: colors.grey,
        marginTop: hp(5),
        marginBottom: hp(4),
    },
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
    RefText: {
        textAlign: 'center',
        color: colors.grey,
        marginBottom: hp(4)
    },
    CalendarView: {
        flexDirection: 'row',
        borderBottomColor: colors.whitePrimary,
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: hp(4)
    },
    DOBText: {
        color: colors.lightgrey,
        marginLeft: wp(1.4),
    },

})

export default Signup;