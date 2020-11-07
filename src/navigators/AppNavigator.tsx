import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoginPage, PointViewPage, PointHistoryPage} from '../components/pages';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PointViewPage" component={PointViewPage} />
        <Stack.Screen name="PointHistoryPage" component={PointHistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
