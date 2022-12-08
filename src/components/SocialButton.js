import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const SocialButton = ({ Image1, Image2, Image3, }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>

            <TouchableOpacity style={{
                borderColor: colors.whiteSecondary,
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: wp(10),
                paddingVertical: hp(1),
                borderWidth: 2,

            }}>
                <Image
                    Image1={Image1}
                    style={{
                        height: hp('3%'),
                        width: wp('6%')
                    }}
                    source={require('../assets/images/google.png')}

                />
            </TouchableOpacity>


            <TouchableOpacity style={{
                borderColor: colors.whiteSecondary, borderWidth: 2, borderRadius: 10,
                paddingHorizontal: wp(10),
                paddingVertical: hp(1),
                borderWidth: 2,

            }}>
                <Image
                    Image2={Image2}
                    style={{
                        height: hp('3%'),
                        width: wp('6%')
                    }}
                    source={require('../assets/images/facebook.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{
                borderColor: colors.whiteSecondary, borderWidth: 2, borderRadius: 10,
                paddingHorizontal: wp(10),
                paddingVertical: hp(1),
                borderWidth: 2,
            }}>
                <Image
                    Image3={Image3}
                    style={{
                        height: hp('3%'),
                        width: wp('6%')
                    }}
                    source={require('../assets/images/twitter.png')}
                />
            </TouchableOpacity>

        </View>
    )
}

export default SocialButton;