import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp/SignUp';
import Login from '../screens/LogIn/Login';
import AttestationNotice from '../screens/AttestationNotice/AttestationNotice';
import Attestation from '../screens/Attestation/Attestation'
import Home from '../screens/Home/Home'


const Stack = createStackNavigator();

export default class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SIGNUP" component={SignUp} />
                    <Stack.Screen name="LOGIN" component={Login} />
                    <Stack.Screen name="Graduates Degree Attestation Notice" component={AttestationNotice} />
                    <Stack.Screen name="Degree Supplement Information Form" component={Attestation} />
                    <Stack.Screen name="Dashboard" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}

