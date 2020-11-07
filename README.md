# Hanson お試しの感想

## 前提
- rn-spoilerだとApp.tsxはsrc配下にある、hands-on-202009だとルート配下

## ...v0.1.0

- AppNavigator
  - ReactNavigationの使い方が古かったので最新版(v5)の書き方に変更
- LoginPage
  - iOSで表示するとノッチ部分に「TopPage」が隠れてしまうので大枠のタグをViewからSafeAreaViewに変更
  - navigationはpropsから受け取らずuseNavigationを使うように変更
- 確認観点
  - Login画面
    - 表示できる
    - レイアウトが以下のようになっている
      - ![実装完了時の画面スクショ](./images/v0.1.0.png)

## v0.1.0...v0.2.0

- ログイン画面で「v0.1.0」って表示しているのが気になった、 「v0.2.0」の間違い？
- 確認観点
  -  Login画面
    - レイアウトが以下のようになっている
      - ![実装完了時の画面スクショ](./images/v0.2.0.png)

## v0.2.0...v0.3.0

- ログイン画面の「v0.1.0」はそのまま？
- AppNavigator
  - ReactNavigationの使い方が古かったので最新版(v5)の書き方に変更
- PointViewPage
  - iOSで表示するとノッチ部分に「TopPage」が隠れてしまうので大枠のタグをViewからSafeAreaViewに変更
  - navigationはpropsから受け取らずuseNavigationを使うように変更
- 確認観点
  - Login画面
    - ログインボタンを押すとPointView画面に遷移する
  - PointView画面
    - レイアウトが以下のようになっている
      - ![実装完了時の画面スクショ](./images/v0.3.0_pointview.png)
    - ログアウトボタンを押すとLogin画面に遷移する

## v0.3.0...v0.4.0
- 確認観点
  - PointView画面
    - レイアウトが以下のようになっている
      - ![実装完了時の画面スクショ](./images/v0.4.0_pointview.png)
