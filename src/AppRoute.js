import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppNav from './Navigation/AppNav';

const AppRoute = () => {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    )
}

export default AppRoute;