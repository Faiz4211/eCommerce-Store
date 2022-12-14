import React, { createContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { ToastAndroid } from "react-native";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,

                login: async (email, password) => {
                    try {
                        if (email == null || password == null) {
                            // alert('opps!')
                            ToastAndroid.showWithGravity(
                                "Email & Password must be fill up!",
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            );
                        }
                        else {
                            await auth().signInWithEmailAndPassword(email, password);

                        }
                    }
                    catch (loginerror) {
                        // console.log(loginerror)
                        if (loginerror) {
                            // alert('Oops!' + loginerror);
                            ToastAndroid.showWithGravity(
                                "Oops!" + loginerror,
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            );
                        }
                    }
                },

                register: async (email, password) => {
                    try {
                        if (email == null || password == null) {
                            // alert('Nikal beta')
                            ToastAndroid.showWithGravity(
                                "Required fields must be fill up!",
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            );
                        }
                        else {
                            await auth().createUserWithEmailAndPassword(email, password);
                        }
                    }
                    catch (registerError) {
                        // console.log(registerError)
                        if (registerError) {
                            // alert('Oops!' + registerError);
                            ToastAndroid.showWithGravity(
                                "Oops!" + registerError,
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            );
                        }
                    }
                },

                logout: async () => {
                    try {
                        await auth().signOut();
                    }
                    catch (logoutError) {
                        console.log(logoutError)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider >
    )
}