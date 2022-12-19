import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../globalStyles/GlobalColor';

const CustomAdressButton = ({ adressText, onPress }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.AdressButton}>
            <Text style={{
                fontSize: hp('2%'),
                fontWeight: '500',
                color: isDarkMode ? colors.white : colors.lightgrey
            }}>{adressText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    AdressButton: {
        marginTop: hp(2),
        height: hp('6%'),
        borderBottomWidth: 1,
        borderBottomColor: colors.whitePrimary,
        justifyContent: 'center',
    },
    Text: {

    }

})
export default CustomAdressButton;