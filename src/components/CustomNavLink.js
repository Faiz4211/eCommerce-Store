import React from 'react';
import { Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../globalStyles/GlobalColor';

const CustomNavLink = ({ NavText, onPress, ButtonText }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: hp(3),
            marginBottom: hp(4)
        }}>
            <Text style={{ color: isDarkMode ? colors.white : colors.black, }}>{NavText}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={{
                    color: isDarkMode ? colors.purple : colors.purple,
                    fontWeight: '700'
                }}>{ButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomNavLink;