import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import HansOnSample from './pages/HansOnSample';

// テンプレートでは、スタックを利用しています。
// アプリでタブの利用する場合は、ここをcreateBottomTabNavigatorに変更してください。
const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={HansOnSample.name}>
      <Main.Screen name={HansOnSample.name} component={HansOnSample.component} options={HansOnSample.options} />
    </Main.Navigator>
  );
}
