import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import CardReportScreen from './Screen/CardReportScreen';
import AccountScreen from './Screen/AccountScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="CardReport"
          component={CardReportScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Account" 
          component={AccountScreen} 
          options={({ navigation }) => ({
          headerTitle: ' ',
          headerLeft: () => (
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
              <Image source={require('./assets/left.png')} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>
          ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },

});