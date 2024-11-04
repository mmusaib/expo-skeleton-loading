|                          | |  |   |   |
| --------------------------------------- | -------- | ---------- |---------- |---------- |
| <a href="https://www.npmjs.com/package/expo-skeleton-loading">![NPM VERSION](https://img.shields.io/npm/v/expo-skeleton-loading?style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/expo-skeleton-loading">![NPM WEEKLY DOWNLOADS](https://img.shields.io/npm/dw/expo-skeleton-loading?color=%232CA215&label=WEEKLY%20DOWNLOADS&style=for-the-badge)</a> | <a href="https://github.com/mmusaib/expo-skeleton-loading/stargazers">![GITHUB STAR](https://img.shields.io/github/stars/mmusaib/expo-skeleton-loading?label=Give%20Us%20A%20Star&style=for-the-badge)</a> | <a href="https://www.youtube.com/channel/UCSwIR2KBHiqiProH3Me8IZQ">![YOUTUBE VIEWS](https://img.shields.io/youtube/channel/views/UCSwIR2KBHiqiProH3Me8IZQ?label=YOUTUBE%20VIEWS&style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/expo-skeleton-loading">![NPM LIFETIME DOWNLOADS](https://img.shields.io/npm/dt/expo-skeleton-loading?color=%232CA215&style=for-the-badge)</a>

<h1 align="center">
  🏳️‍🌈  Expo Skeleton Loading
</h1>

<div align="center">

🟢 Skeleton Loading Component for Expo  powered apps 

<a href="https://twitter.com/_mmusaib" target="_blank"></a>
<img src="https://i.imgur.com/toxEFWe.png" width="500" />
</div>



<h4>Light Weight and <b>Robust</b> Skeleton Loader.</h4>

-   Design skeleton loading screen of your choice 
-   Pass colors of your choice
-   Powered by Reanimated 3
-   Make your apps professional in UI/UX




# Compatibility


|  iOS  | Android | Expo |
--------|---------|------|
|  ✅  |    ✅    |  ✅  |



# React Native CLI Equivalent
For CLI Loader [(Click Here)](https://github.com/mmusaib/react-native-skeleton-loading)



# 🔌 Installation

```sh
$ npm install expo-skeleton-loading

```

OR

```sh
$ yarn add expo-skeleton-loading
```

# Setup
This package is based on react-natve-reanimated 3 so according to their documentation, 
you need to initialize that in babel.config.js. To do that stop the metro bundler and
then add following line of code to the return object of babel.config.js

```js
plugins: ['react-native-reanimated/plugin']
```

After adding the line of code, start the bundler or project with --clear tag like,

```sh
npx expo start --clear
```
This will clear the bundler cache and you are ready to go.



# 😎 Displaying the skeleton loading
All you need is to just import the skeleton loading component, and in between the
closing and ending tags, you can design the UI of your skeleton loading screen
as shown in the code snippet below:

```jsx
import SkeletonLoading from 'expo-skeleton-loading'

const App = () => {

  return(
    <SkeletonLoading background={"#adadad"} highlight={"#ffffff"}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }} />

          <View style={{ flex:1, marginLeft: 10 }}>
              <View style={{ backgroundColor: "#adadad", width: "50%", height: 10, marginBottom: 3, borderRadius: 5 }} />
              <View style={{ backgroundColor: "#adadad", width: '20%', height: 8, borderRadius: 5 }} />
              <View style={{ backgroundColor: "#adadad", width: '15%', height: 8, borderRadius: 5, marginTop: 3 }} />
          </View>
        </View>
    </SkeletonLoading>
  )

};
```



For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-skeleton-loading?platform=android)

# ⭐ Props  for  the component
| Name | Type | Description |
| ---- | ----------- | ----------- |
| background | hex color string | Hex color string for the background of loading component
| highlight | hex color string | Hex color string for the highlight of loading component




# 💲 Would you like to support me?

If you would like me come up with similar packages, buy me a cup of coffee to boost my energy.
<br><br>
[![Paypal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png)](https://paypal.me/mmusaib)
<br><br>



# ▶️ Watch Tutorial Video 

 [![Watch video](https://i.imgur.com/DdfMsly.png)](https://www.youtube.com/watch?v=QIStdt9sx5Y&list=PLbMQyvHNUAyKVjlOwqkLATvGG9e1Lgw0O&index=11&pp=gAQBiAQB)


<!-- For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-stock-star-rating)









