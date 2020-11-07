import {activateKeepAwake} from 'expo-keep-awake';
import React from 'react';

import AppNavigator from './navigators/AppNavigator';

export default function App() {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }
  return <AppNavigator />;
}
