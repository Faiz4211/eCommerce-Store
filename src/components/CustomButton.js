import React from 'react';
import { Text, TouchableOpacity, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomButton = ({ buttonText, onPress }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <TouchableOpacity
            onPress={onPress}

            style={{
                backgroundColor: isDarkMode ? colors.purple : colors.purple,
                padding: 12,
                borderRadius: 10,
                marginBottom: hp(4),
            }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                color: isDarkMode ? colors.white : colors.white,
                fontSize: hp('2%')
            }}>
                {buttonText}
            </Text>
        </TouchableOpacity >
    )
}
export default CustomButton;