import React from 'react';
import { StyleSheet, View, TouchableOpacity, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import InputField from '../components/InputField';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addAdress } from '../redux/actions/Actions';
import colors from '../globalStyles/GlobalColor';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddAdress = () => {
    const [city, setCity] = useState('');
    const [building, setBuilding] = useState('');
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{ flex: 1, backgroundColor: backgroundStyle.backgroundColor }}>
            <View style={styles.InnerView}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
                    <Ionicons name='arrow-back' size={25} color={isDarkMode ? colors.white : colors.lightgrey} />
                </TouchableOpacity>
                <InputField
                    value={city}
                    onChangeText={setCity}
                    label={'City Name'}
                    icon={<FontAwesome5 style={{
                        marginRight: wp(3),
                    }} name='city' size={20} color={isDarkMode ? colors.white : colors.lightgrey} />}
                />
                <InputField
                    value={building}
                    onChangeText={setBuilding}
                    label={'Building Name'}
                    icon={<FontAwesome5 style={{
                        marginRight: wp(3),
                    }} name='chart-area' size={20} color={isDarkMode ? colors.white : colors.lightgrey} />}
                />
                <InputField
                    value={pin}
                    onChangeText={setPin}
                    label={'Enter Pin Code'}
                    keyboardType={'number-pad'}
                    icon={<Entypo style={{
                        marginRight: wp(3),
                    }} name='pin' size={20} color={isDarkMode ? colors.white : colors.lightgrey} />}

                />
                <CustomButton
                    onPress={() => {
                        if (city !== '' && building !== '' && pin !== '') {
                            dispatch(addAdress({ city, building, pin }));
                            navigation.navigate('MyAdress');
                        }
                    }}
                    buttonText={'Save Adress'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    InnerView: {
        paddingHorizontal: wp(4),
        padding: 10
    },
    headText: {
        fontSize: hp('2.5%'),
        fontWeight: '600',
    },
    btn: {
        marginBottom: hp(4)
    },
})

export default AddAdress;
