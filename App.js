
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Screen/LandingScreen';
import CustomerLanding from './Screen/CustomerLanding';
import CustomerSignUp from './Screen/CustomerSignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name="CustomerLanding" component={CustomerLanding} options={{headerShown:false}} />
        <Stack.Screen name="CustomerSignUp" component={CustomerSignUp} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}