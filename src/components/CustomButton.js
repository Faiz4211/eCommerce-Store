import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomButton = ({ buttonText, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}

            style={{
                backgroundColor: colors.purple,
                padding: 12,
                borderRadius: 10,
                marginBottom: hp(4),
            }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                color: colors.white,
                fontSize: hp('2%')
            }}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButton;