import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CustomCard = ({ item, onAddToCart, onAddWishList }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                marginLeft: wp(4),
                backgroundColor: colors.white,
                borderRadius: 20,
                backgroundColor: colors.white

            }}
        >
            <View>
                <Image source={item.image} style={{
                    height: hp('25%'),
                    width: wp('50%'),
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />
                <Text style={{ marginTop: hp(1), marginLeft: wp(4), fontSize: hp('2%'), color: colors.purple }}>{item.name}</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: hp(2),
                    marginBottom: hp(2),

                }}>
                    <Text style={{ marginLeft: wp(4), fontSize: hp('2%'), color: colors.purple }}>{'₨ ' + item.price}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            onAddToCart(item)
                        }}
                        style={{
                            marginHorizontal: wp(4),
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                        <Image style={{
                            height: hp('3%'),
                            width: wp('6%')
                        }} source={require('../assets/images/addtocart.png')} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 5,
                        marginHorizontal: wp(2)

                    }}
                    onPress={() => {
                        onAddWishList(item)
                    }}
                >
                    <Image style={{
                        height: hp('3.5%'),
                        width: wp('7.2%'),
                        tintColor: colors.purple
                    }} source={require('../assets/images/heart.png')} />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}

export default CustomCard;