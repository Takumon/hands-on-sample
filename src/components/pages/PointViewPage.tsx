import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const PointViewPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>PointViewPage</Text>
      <Button title="ログアウト" onPress={() => navigation.navigate('LoginPage')} />
    </SafeAreaView>
  );
};

export default PointViewPage;
