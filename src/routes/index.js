import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { View, ActivityIndicator } from 'react-native'

function Routes() {

    const { signed, loading } = useContext(AuthContext);


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="00b94a" size='large' />
            </View>
        );
    } else {
        return (
            signed ? <AppRoutes /> : <AuthRoutes />
        )
    }

}


export default Routes;