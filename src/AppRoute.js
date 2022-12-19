import React from 'react';
import { AuthProvider } from './Context/AuthProvider';
import AppNav from './Navigation/AppNav';

const AppRoute = () => {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    )
}

export default AppRoute;