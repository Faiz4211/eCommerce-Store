import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CustomButton from '../components/CustomButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';

const Cart = () => {
    const navigation = useNavigation()
    const cartData = useSelector(state => state.Reducers);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {cartData.length > 0 ? (
                <FlatList
                    data={cartData}
                    renderItem={({ item, index }) => {
                        return (
                            <CartItem
                                item={item}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                                onRemoveItem={() => {
                                    dispatch(removeFromCart(index))
                                }}
                            />
                        )
                    }}
                />
            ) : (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={{ textAlign: 'center' }}>No Items Added in Cart. Please add it first!</Text>
                </View>
            )}
            {cartData.length > 0 ? (<View>
                <View style={styles.btnView}>
                    <CustomButton

                        onPress={() => {
                            var options = {
                                description: 'Credits towards consultation',
                                image: 'https://i.imgur.com/3g7nmJC.png',
                                currency: 'INR',
                                // key: 'https://api.razorpay.com/v1/orders',
                                key: 'rzp_test_1DP5mmOlF5G5ag',
                                amount: '5000',
                                name: 'foo',
                                prefill: {
                                    email: 'void@razorpay.com',
                                    contact: '9191919191',
                                    name: 'Razorpay Software'
                                },
                                theme: { color: '#F37254' }
                            }
                            RazorpayCheckout.open(options).then((data) => {
                                // handle success
                                alert(`Success: ${data.razorpay_payment_id}`);
                            }).catch((error) => {
                                // handle failure
                                alert(`Error: ${error.code} | ${error.description}`);
                            });
                        }}
                        buttonText={'Check Out'}
                    />
                </View>

            </View>) : null}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnView: {
        alignSelf: 'center',
        width: wp('80%'),
    }
})

export default Cart;