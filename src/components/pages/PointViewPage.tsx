import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Button, Image, StyleSheet} from 'react-native';

const sampleAvatar =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABT0lEQVRYR+2WvXLCMAyAlcSUcvwMMHRhaF+gUwfef2mHvkMZGGCAAehRcNwiBTMlIEVue+HO3xL/xfddLEtJfhBoEKl/NoYoxBGFOKIQR3AeWuYOVnletEfGwNBkRVuLWijHt963nyjj/MgJEnrpdcEkfqAm6iN73WxLMgSNveGcFpXQx/4AG/fte2XWODc7WN+rh0poZU8xc43FfwpZQdhJ1lShEhpk/E2SrKlCJfR03/aty0jWVKES6qQJPHc7vleG5miNhqDESElx+rWHhQ/yh5aBR/wyo4DkGP8YOVRfiMrG2jk8sup8RDWNbpmmfNQSoliZYZY+xwwHxdS4fVc8pYiELhVSKXUKLitEMlQsqT6FMMhSmPR7rBQb1HNrg2UI2oP24mCFdr8gc0ay1+1d++IXVXirOIZ427gsrspDf0njjiwKcUQhjih0HYAj6K2fFtVoFLEAAAAASUVORK5CYII=';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
});

const PointViewPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Image source={{uri: sampleAvatar}} style={styles.avatar} />
        <Text>山田 太郎</Text>
      </View>

      <View>
        <View>
          <Text>市内ゴミBOX回収総量</Text>
          <Text>
            <Text>1000</Text>
            <Text>kg</Text>
          </Text>
        </View>
        <View>
          <Text>あなたが節約したゴミ袋の総額</Text>
          <Text>
            <Text>1280</Text>
            <Text>円</Text>
          </Text>
        </View>
      </View>

      <Button title="ポイント実績" onPress={() => console.log('PointHistoryPage clicked!')} />

      <Button title="ログアウト" onPress={() => navigation.navigate('LoginPage')} />
    </SafeAreaView>
  );
};

export default PointViewPage;
