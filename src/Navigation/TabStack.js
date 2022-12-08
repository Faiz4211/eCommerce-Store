import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../globalStyles/GlobalColor';
import Main from '../screens/Main';
import Cart from '../screens/Cart';
import WishList from '../screens/WishList';
import Account from '../screens/Account';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


function TabStack() {
    const navigation = useNavigation();
    const data = useSelector(state => state);


    return (
        <Tab.Navigator initialRouteName='Cart' screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: colors.white,
            tabBarStyle: {
                backgroundColor: colors.purple,
            },

        }}>
            <Tab.Screen name='Main2' component={Main}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name='md-home-sharp' size={35} color={colors.white} />
                            </View>
                        )


                    }

                }}
            />
            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name='md-cart-sharp' size={35} color={colors.white} />
                                <TouchableOpacity style={{
                                    width: wp('5%'),
                                    height: hp('2.5%'),
                                    backgroundColor: colors.whiteSecondary,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    top: -2,
                                    marginLeft: wp(7)
                                }}>
                                    <Text style={{
                                        color: colors.black,
                                        textAlign: 'center',
                                        justifyContent: 'center'
                                    }}>{data.Reducers.length}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='Wish' component={WishList}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name='heart' color={colors.white} size={35} />
                                <View style={{
                                    width: wp('5%'),
                                    height: hp('2.5%'),
                                    backgroundColor: colors.whiteSecondary,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    top: -2,
                                    marginLeft: wp(7)
                                }}>
                                    <Text style={{
                                        color: colors.black,
                                        textAlign: 'center',
                                        justifyContent: 'center'
                                    }}>{data.Reducers2.length}</Text>
                                </View>
                            </View>


                        )
                    }
                }}

            />
            <Tab.Screen name='Acc' component={Account}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome name='user' size={35} color={colors.white} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator >
    );
}
export default TabStack;