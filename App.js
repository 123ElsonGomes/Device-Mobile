import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import ResisterScreen from './screens/ResisterScreen';
import DashBoard from './screens/DashBoard';
import Nivel0 from './screens/Nivel0';
import Nivel1 from './screens/Nivel1';
import Nivel2 from './screens/Nivel2';
import Nivel3 from './screens/Nivel3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={ResisterScreen}/>
        <Stack.Screen name='DashBoard' component={DashBoard}/>
        <Stack.Screen name='Nivel0' component={Nivel0}/>
        <Stack.Screen name='Nivel1' component={Nivel1}/>
        <Stack.Screen name='Nivel2' component={Nivel2}/>
        <Stack.Screen name='Nivel3' component={Nivel3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
