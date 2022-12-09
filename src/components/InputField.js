import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonLable, fieldButtonFunction, value, onChangeText }) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: colors.whitePrimary,
            borderBottomWidth: 1,
            marginBottom: hp(4),
            alignItems: 'center'
        }}>
            {icon}
            {inputType == 'password' ? (<TextInput style={{
                flex: 1,
                paddingVertical: 0,
                color: colors.lightgrey
            }}
                placeholder={label}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry
                keyboardType={keyboardType}
            />) : (
                <TextInput style={{
                    flex: 1,
                    paddingVertical: 0,
                    color: colors.lightgrey
                }}
                    placeholder={label}
                    value={value}
                    onChangeText={onChangeText}
                />
            )}

            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{
                    color: colors.purple,
                    fontWeight: '700',

                }}>{fieldButtonLable}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputField;