import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage'; // Vous devez créer cette page

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
