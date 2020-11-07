import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoginPage} from '../components/pages';
import PointViewPage from '../components/pages/PointViewPage';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PointViewPage" component={PointViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
