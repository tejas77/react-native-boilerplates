# Simple Project Boilerplate

This is the boilerplate for Beginners who have just completed any course on **react-native**.

This boilerplate is for projects which are created by `npx react-native init` **with typescript template**.

## Installation

- Create a project of your desired name by `npx react-native init projectName --template react-native-template-typescript`
- Install the given dependencies by opening a terminal at your project folder and copy-paste this commands and run them.

```sh
npm install --save react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack react-navigation-tabs react-navigation-drawer react-navigation-header-buttons redux react-redux @types/react-redux redux-thunk @react-native-community/async-storage react-native-vector-icons @types/react-native-vector-icons
```

- **For Android:**\
  Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

- Copy the content of this folder into your own project
- If you're on a Mac and developing for iOS, you need to install pods to complete the linking. Make sure you have Cocoapods installed. Then run:

```
cd ios; pod install; cd ..
```

- Check all the packages are properly installed
- Test the project by `npm start`
- Enjoy !
