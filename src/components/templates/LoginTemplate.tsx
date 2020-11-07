import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, TextInput, Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
  },
});

type Props = {
  version: string;
  onPressLogin: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onPressForgotPassword: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const LoginPage: React.FC<Props> = ({version, onPressLogin, onPressForgotPassword}) => {
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

      <Button onPress={onPressLogin} title="ログイン" />

      <Button onPress={onPressForgotPassword} title="パスワードを忘れた方はこちら" />

      <View>
        <Text>version: {version}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
