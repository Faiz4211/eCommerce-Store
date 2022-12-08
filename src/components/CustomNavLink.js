import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomNavLink = ({ NavText, onPress, ButtonText }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: hp(3),
            marginBottom: hp(4)
        }}>
            <Text style={{ color: colors.lightgrey }}>{NavText}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={{
                    color: colors.purple,
                    fontWeight: '700'
                }}>{ButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomNavLink;