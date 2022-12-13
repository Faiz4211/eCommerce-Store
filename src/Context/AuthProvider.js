import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

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
                        await auth().signInWithEmailAndPassword(email, password);
                    }
                    catch (loginerror) {
                        // console.log(loginerror)

                        if (loginerror) {
                            alert('Oops!' + loginerror);
                        }
                        else if (email === '') {

                        }
                        else {
                            null;
                        }
                    }
                },
                register: async (email, password) => {
                    try {

                        await auth().createUserWithEmailAndPassword(email, password);
                    }
                    catch (registerError) {
                        // console.log(registerError)
                        if (registerError) {
                            alert('Oops!' + registerError);
                        }
                        else {
                            null;
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