import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../globalStyles/GlobalColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { removeAdress } from '../redux/actions/Actions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// let addressList = [];
const MyAdress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AdressReducers);
    console.log(addressList);
    const dispatch = useDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.InnerView}>
                <View style={styles.header}>
                    <Text style={styles.headText}>My Adress</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddAdress')} style={styles.btn}>
                        <FontAwesome name='address-book' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={addressList}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: wp('90%'),
                            borderWidth: 0.9,
                            borderColor: colors.black,
                            alignSelf: 'center',
                            borderRadius: 10,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View>
                                <Text style={{
                                    marginLeft: wp(4),
                                    fontSize: hp('2%'),
                                    marginTop: hp(2)
                                }}>{'City: ' + item.city}</Text>
                                <Text style={{
                                    marginLeft: wp(4),
                                    fontSize: hp('2%')
                                }}>{'Building: ' + item.building}</Text>
                                <Text style={{
                                    marginLeft: wp(4),
                                    fontSize: hp('2%'),
                                    marginBottom: hp(2)
                                }}>{'Pin Code: ' + item.pin}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(removeAdress(index))
                                }}
                                style={{
                                    padding: 7,

                                }}>
                                <AntDesign name='delete' size={30} color={isDarkMode ? colors.white : colors.lightgrey} />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    InnerView: {
        paddingHorizontal: wp(4),
    },
    headText: {
        fontSize: hp('2.5%'),
        fontWeight: '600',
    },
    btn: {
        width: wp('10%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MyAdress;