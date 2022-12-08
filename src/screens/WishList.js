import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { addItemToCart, removeFromCart, removeFromWishlist } from '../redux/actions/Actions';

const WishList = () => {
    const [cartList, setCartList] = useState([]);
    const cartData = useSelector(state => state.Reducers2);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            alignItems: 'center'

                        }}>
                            <CartItem
                                isWishList={'rfs'}
                                onRemoveFromWishlist={() => {
                                    dispatch(removeFromWishlist(index))
                                }}
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(x))
                                }}
                            />
                        </View>


                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default WishList;