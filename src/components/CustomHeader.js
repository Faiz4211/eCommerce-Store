import React, { useState, useEffect } from 'react';
import { Text, View, Switch, useColorScheme, Appearance, Button } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../globalStyles/GlobalColor';

const CustomHeader = ({ headerText }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
            setIsEnabled(true); // true means dark
        } else {
            setIsEnabled(false); // false means light
        }
    }, [])

    return (
        <View
            style={{
                width: wp('100%'),
                height: hp('8%'),
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.2,
                backgroundColor: backgroundStyle.backgroundColor
            }}>
            <Text
                style={{
                    color: isDarkMode ? colors.white : colors.lightgrey,
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
        </View>
    )
}

export default CustomHeader;