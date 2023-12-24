import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Front from './src/pages/Front';
import Home from './src/pages/Home';
import Feature from './src/pages/Feature';



const Stack = createNativeStackNavigator();

<StatusBar backgroundColor='black'></StatusBar>

export default function App() {

  
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Front" component={Front} />
        <Stack.Screen options={{headerShown:false}} name="Home"  component={Home} />
        <Stack.Screen  options={{headerShown:false}} name="Feature" component={Feature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

