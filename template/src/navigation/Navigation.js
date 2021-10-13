import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{title: 'Home'}} />
        </Stack.Navigator>
    );
}
 
export default Navigation;