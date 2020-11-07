import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
  },
});

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>LOGO</Text>
      </View>

      <View>
        <Text>email</Text>
        <TextInput style={styles.form} onChangeText={(text) => console.log('Email Form: ' + text)} />
      </View>

      <View>
        <Text>password</Text>
        <TextInput style={styles.form} onChangeText={(text) => console.log('Password Form: ' + text)} />
      </View>

      <Button onPress={() => navigation.navigate('PointViewPage')} title="ログイン" />

      <Button onPress={() => console.log('Forgot Password: clicked!')} title="パスワードを忘れた方はこちら" />

      <View>
        <Text>version: 0.0.1</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
