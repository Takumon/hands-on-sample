import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {LoginTemplate} from '../templates';

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  // FIXME: 設定ファイルから取得
  const version = '0.0.1';

  const onPressLogin = () => navigation.navigate('PointViewPage');
  const onPressForgotPassword = () => console.log('Forgot Password: clicked!');

  return <LoginTemplate version={version} onPressLogin={onPressLogin} onPressForgotPassword={onPressForgotPassword} />;
};

export default LoginPage;
