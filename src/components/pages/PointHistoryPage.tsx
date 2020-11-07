import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const PointHistoryPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Point History Page</Text>
      <Button title="戻る" onPress={() => navigation.navigate('PointViewPage')} />
    </SafeAreaView>
  );
};

export default PointHistoryPage;
