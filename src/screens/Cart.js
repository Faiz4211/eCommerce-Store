import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CustomButton from '../components/CustomButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation()
    const [cartList, setCartList] = useState([]);
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
                    <Text style={{ textAlign: 'center' }}>No Items Added in Cart. Please add it first</Text>
                </View>
            )}
            {cartData.length > 0 ? (<View>
                <View style={styles.btnView}>
                    <CustomButton
                        onPress={() => navigation.navigate('Acc')}
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
        width: wp('90%')
    }
})

export default Cart;