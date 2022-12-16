import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomHeader = ({ headerText }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View
            style={{
                width: wp('100%'),
                height: hp('8%'),
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.2,
                borderBottomColor: colors.grey,
                backgroundColor: colors.white
            }}>
            <Text
                style={{
                    color: colors.black,
                    marginLeft: wp(3),
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    textAlign: 'center',
                }}>
                {headerText}
            </Text>

            <Switch
                style={{
                    marginRight: wp(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                thumbColor={isEnabled ? colors.purple : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            {/* <TouchableOpacity
                style={{
                    marginRight: wp(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: wp('10%'),
                    height: hp('5%'),
                }}>
                <Text style={{
                    fontSize: hp('2%'),
                    color: colors.black,
                }}>{ModeText}</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default CustomHeader;