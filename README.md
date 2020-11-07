# Hanson お試しの感想

## 前提
- rn-spoilerだとApp.tsxはsrc配下にある、hands-on-202009だとルート配下

## ...v0.1.0

- AppNavigator
  - ReactNavigationの使い方が古かったので最新版(v5)の書き方に変更
- LoginPage
  - iOSで表示するとノッチ部分に「TopPage」が隠れてしまうので大枠のタグをViewからSafeAreaViewに変更
  - navigationはpropsから受け取らずuseNavigationを使うように変更

![実装完了時の画面スクショ](./images/v0.1.0.png)
