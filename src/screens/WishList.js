import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { addItemToCart, removeFromWishlist } from '../redux/actions/Actions';

const WishList = () => {
    const cartData = useSelector(state => state.Reducers2);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {cartData.length > 0 ? (
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

            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ textAlign: 'center' }}>No items found in WishList. Please add it first!</Text>
                </View>
            )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default WishList;