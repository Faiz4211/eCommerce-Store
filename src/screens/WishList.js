import React from 'react';
import { StyleSheet, View, FlatList, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { addItemToCart, removeFromWishlist } from '../redux/actions/Actions';

const WishList = () => {
    const cartData = useSelector(state => state.Reducers2);
    const dispatch = useDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundStyle.backgroundColor
        }}>
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