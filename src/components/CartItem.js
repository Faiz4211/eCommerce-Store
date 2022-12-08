import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const CartItem = ({ item, onRemoveItem, onAddWishList, onRemoveFromWishlist, isWishList, onAddToCart }) => {
    return (
        <TouchableOpacity
            style={{
                // height: hp('30%'),
                alignItems: 'center',
                marginLeft: wp(4),
                backgroundColor: colors.white,
                elevation: 5,
                borderRadius: 20,
                backgroundColor: colors.white,
                margin: 15,

            }}
        >
            <View>
                <Image source={item.image} style={{
                    height: hp('25%'),
                    width: wp('90%'),
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />
                <Text style={{
                    marginTop: hp(1), marginLeft: wp(4), fontSize: hp('2%'),
                    color: colors.purple
                }}>{item.name}</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: hp(2),
                    marginBottom: hp(2),

                }}>
                    <Text style={{
                        marginLeft: wp(4), fontSize: hp('2%'),
                        color: colors.purple
                    }}>{'₨ ' + item.price}</Text>
                    {isWishList ? (
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
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                onRemoveItem()
                            }}
                            style={{
                                marginHorizontal: wp(4),
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                            <Image style={{
                                height: hp('3%'),
                                width: wp('6%')
                            }} source={require('../assets/images/removecart.png')} />
                        </TouchableOpacity>
                    )}

                </View>
                {isWishList ? (
                    <TouchableOpacity
                        style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 5,
                            right: 10,
                        }}
                        onPress={() => {
                            onRemoveFromWishlist()
                        }}
                    >

                        <Image style={{
                            height: hp('3.5%'),
                            width: wp('7%'),
                            tintColor: colors.purple,
                        }} source={require('../assets/images/heart_fill.png')} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 5,
                            right: 10,

                        }}
                        onPress={() => {
                            onAddWishList(item)
                        }}
                    >
                        <Image style={{
                            height: hp('3.5%'),
                            width: wp('7%'),
                            tintColor: colors.purple
                        }} source={require('../assets/images/heart.png')} />
                    </TouchableOpacity>
                )}
            </View>

        </TouchableOpacity>
    )
}

export default CartItem;