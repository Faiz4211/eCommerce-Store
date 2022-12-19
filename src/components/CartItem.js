import React from 'react';
import { View, Text, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../globalStyles/GlobalColor';

const CartItem = ({ item, onRemoveItem, onAddWishList, onRemoveFromWishlist, isWishList, onAddToCart }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <TouchableOpacity
            style={{
                width: wp('90%'),
                alignSelf: 'center',
                marginLeft: wp(4),
                elevation: 5,
                borderRadius: 20,
                backgroundColor: backgroundStyle.backgroundColor,
                margin: 15,

            }}
        >
            <View>
                <Image source={item.image} style={{
                    height: hp('15%'),
                    width: wp('90%'),
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />
                <Text style={{
                    marginTop: hp(1), marginLeft: wp(4), fontSize: hp('2%'),
                    color: isDarkMode ? colors.purple : colors.purple
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
                        color: isDarkMode ? colors.purple : colors.purple
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
                                height: hp('4%'),
                                width: wp('7%')
                            }} source={require('../assets/images/emptycart.png')} />
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
                            right: 12,
                        }}
                        onPress={() => {
                            onRemoveFromWishlist()
                        }}
                    >

                        <Image style={{
                            height: hp('3.5%'),
                            width: wp('7.2%'),
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
                            right: 12,

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
                )}
            </View>

        </TouchableOpacity>
    )
}

export default CartItem;