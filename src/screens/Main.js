import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../components/CustomHeader';
import colors from '../globalStyles/GlobalColor';
import { products } from '../components/Data/Product';
import CustomCard from '../components/CustomCard';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';

const Main = () => {
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jacketList, setJacketList] = useState([]);
    const [slippersList, setSliperList] = useState([]);
    const [trouserList, setTrouserList] = useState([]);
    useEffect(() => {
        let categories = [];
        products.category.map((item) => {
            categories.push(item.category)
        });
        setTshirtList(products.category[0].data);
        setJeansList(products.category[1].data);
        setShoesList(products.category[2].data);
        setJacketList(products.category[3].data);
        setSliperList(products.category[4].data);
        setTrouserList(products.category[5].data)
        setCategoryList(categories);
        // console.log(JSON.stringify(products.category[0]))
    }, []);

    // const items = useSelector(state => state);
    // console.log(items)
    return (
        <ScrollView style={styles.container}>
            <CustomHeader
                headerText={'ECommerce Store'}
                ModeText={'Mode'} />
            {/* <Image style={styles.Image} source={require('../assets/images/banner.jpeg')} /> */}
            <Image style={styles.Image} source={require('../assets/images/store3.jpg')} />
            <View style={{
                marginTop: hp(3),
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categoryList}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    height: hp('5%'),
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: colors.purple,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: wp(4),

                                }}
                            >
                                <Text style={{
                                    fontSize: hp('2%'),
                                    color: colors.grey,
                                    marginLeft: wp(4),
                                    marginRight: wp(4),
                                }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            {/* This is first listing  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>New T-Shirts!</Text>
            </View>
            <View style={{
                marginTop: hp(3)
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={tshirtList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(x))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )

                    }}
                />
            </View>

            {/* This is second listing  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>New Jeans!</Text>
            </View>
            <View style={{
                marginTop: hp(3)
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={jeansList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(x))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )
                    }}
                />
            </View>

            {/* This is third listing  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>Shoes List!</Text>
            </View>
            <View style={{
                marginTop: hp(3)
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={shoesList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(item))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )
                    }}
                />

            </View>

            {/* This is fourth List  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>Jacket List!</Text>
            </View>
            <View style={{
                marginTop: hp(3)
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={jacketList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(item))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )

                    }}
                />
            </View>

            {/* This is fifth listing  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>Sliper List!</Text>
            </View>
            <View style={{
                marginTop: hp(3)
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={slippersList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(item))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )
                    }}
                />
            </View>

            {/* This is sixth listing  */}
            <View style={{
                marginTop: hp(3),
            }}>
                <Text style={{
                    fontSize: hp('3%'),
                    fontWeight: '600',
                    color: colors.grey,
                    marginLeft: wp(4),
                }}>Trousers List!</Text>
            </View>
            <View style={{
                marginTop: hp(3),
                marginBottom: hp(5),
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trouserList}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomCard
                                item={item}
                                onAddToCart={(x) => {
                                    dispatch(addItemToCart(x))
                                }}
                                onAddWishList={(x) => {
                                    dispatch(addToWishlist(x))
                                }}
                            />
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Image: {
        marginTop: hp(1),
        width: wp('95%'),
        height: hp('25%'),
        alignSelf: 'center',
        borderRadius: 10,
        resizeMode: 'cover'
    }
})

export default Main;
