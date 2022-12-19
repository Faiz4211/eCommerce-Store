import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../globalStyles/GlobalColor';

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonLable, fieldButtonFunction, value, onChangeText }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: backgroundStyle.backgroundColor,
            borderBottomColor: isDarkMode ? colors.white : colors.whitePrimary,
            borderBottomWidth: 1,
            marginBottom: hp(4),
            alignItems: 'center'
        }}>
            {icon}
            {inputType == 'password' ? (<TextInput style={{
                flex: 1,
                paddingVertical: 0,
                color: isDarkMode ? colors.white : colors.lightgrey,
            }}
                placeholder={label}
                placeholderTextColor={isDarkMode ? colors.white : colors.lightgrey}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry
                keyboardType={keyboardType}
            />) : (
                <TextInput style={{
                    flex: 1,
                    paddingVertical: 0,
                    color: isDarkMode ? colors.white : colors.lightgrey,
                }}
                    placeholder={label}
                    placeholderTextColor={isDarkMode ? colors.white : colors.lightgrey}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
            )}

            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{
                    color: isDarkMode ? colors.purple : colors.purple,
                    fontWeight: '700',

                }}>{fieldButtonLable}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputField;