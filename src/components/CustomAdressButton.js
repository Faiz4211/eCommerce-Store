import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomAdressButton = ({ adressText, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.AdressButton}>
            <Text style={styles.Text}>{adressText}</Text>
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
        fontSize: hp('2%'),
        fontWeight: '500'

    }

})
export default CustomAdressButton;