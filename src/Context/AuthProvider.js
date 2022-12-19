import React, { createContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { ToastAndroid } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '395180905588-1i0440to9jhd8d9secdvlo78s43ahnd8.apps.googleusercontent.com',
        });
    })
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                pending,
                setPending,

                login: async (email, password) => {
                    setPending(true)
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
                    setPending(false);
                },

                googleLogin: async () => {
                    try {
                        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                        // Get the users ID token
                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                    }
                    catch (googleLoginError) {
                        console.log(googleLoginError)
                    }
                },

                register: async (email, password) => {
                    setPending(true)
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
                    setPending(false)
                },

                logout: async () => {
                    setPending(true)
                    try {
                        await auth().signOut();
                    }
                    catch (logoutError) {
                        console.log(logoutError)
                    }
                    setPending(false)
                }
            }}
        >
            {children}
        </AuthContext.Provider >
    )
}