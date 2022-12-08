import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import InputField from '../components/InputField';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addAdress } from '../redux/actions/Actions';

const AddAdress = () => {
    const [city, setCity] = useState('');
    const [building, setBuilding] = useState('');
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.InnerView}>
                {/* <View style={styles.header}> */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
                    <Ionicons name='arrow-back' size={25} />
                </TouchableOpacity>
                {/* </View> */}
                <InputField
                    value={city}
                    onChangeText={setCity}
                    label={'City Name'}
                    icon={<FontAwesome5 style={{
                        marginRight: wp(3),
                    }} name='city' size={20} color={colors.lightgrey} />}
                />
                <InputField
                    value={building}
                    onChangeText={setBuilding}
                    label={'Building Name'}
                    icon={<FontAwesome5 style={{
                        marginRight: wp(3),
                    }} name='chart-area' size={20} color={colors.lightgrey} />}
                />
                <InputField
                    value={pin}
                    onChangeText={setPin}
                    label={'Enter Pin Code'}
                    keyboardType={'number-pad'}
                    icon={<Entypo style={{
                        marginRight: wp(3),
                    }} name='pin' size={20} color={colors.lightgrey} />}

                />

                <CustomButton
                    onPress={() => {
                        if (city !== '' && building !== '' && pin !== '') {
                            dispatch(addAdress({ city, building, pin }));
                            navigation.goBack();
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
        width: wp('10%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AddAdress;
