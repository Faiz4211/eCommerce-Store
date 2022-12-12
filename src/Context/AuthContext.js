// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { BASE_URL } from "../api/config";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [userInfo, setUserInfo] = useState(null);
//     const [userToken, setUserToken] = useState(null);

//     const login = (email, password) => {
//         axios.post(`${BASE_URL}/api/user/login`, {
//             email,
//             password
//         })
//             .then(res => {
//                 let userInfo = res.data;
//                 setUserInfo(userInfo);
//                 setUserToken(userInfo.token);
//                 AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//                 AsyncStorage.setItem('userToken', userInfo.token);
//                 console.log(userInfo);
//                 console.log('Login', + userInfo.token);
//             })
//             .catch(e => {
//                 alert('Please enter all fields or Invalid credientals')
//                 console.log(`Login error, ${e}`)
//             })
//         setIsLoading(false)
//     }


//     const Signup = (name, email, password, confirmPassword) => {
//         axios.post(`${BASE_URL}/api/user`, {
//             name,
//             email,
//             password,
//             confirmPassword
//         })
//             .then(res => {
//                 let userInfo = res.data;
//                 setUserInfo(userInfo);
//                 setUserToken(userInfo.token);
//                 AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//                 AsyncStorage.setItem('userToken', userInfo.token);
//                 console.log(userInfo);
//                 console.log('Signup', + userInfo.token)
//             })
//             .catch(e => {
//                 alert('Please enter all fields')
//                 console.log(`Signup error, ${e}`)
//             })
//         setIsLoading(false)
//     }


//     const logout = () => {
//         setIsLoading(true);
//         setUserToken(null);
//         AsyncStorage.removeItem('userInfo');
//         AsyncStorage.removeItem('userToken');
//         setIsLoading(false);
//     }

//     const isLoggedIn = async () => {
//         try {
//             setIsLoading(true)
//             let userInfo = await AsyncStorage.getItem('userInfo');
//             let userToken = await AsyncStorage.getItem('userToken');
//             userInfo = JSON.parse(userInfo);

//             if (userInfo) {
//                 setUserToken(userToken);
//                 setUserInfo(userInfo);
//             }

//             setIsLoading(false)
//         }
//         catch (err) {
//             console.log(`isLoggedIn in error ${err}`)
//         }
//     }

//     useEffect(() => {
//         isLoggedIn()
//     }, [])


//     return (
//         <AuthContext.Provider value={{ login, logout, isLoading, userToken, Signup }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }