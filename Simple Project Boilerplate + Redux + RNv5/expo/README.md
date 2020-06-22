# Simple Project Boilerplate

This is the boilerplate for Beginners who have just completed any course on **react-native**.

This boilerplate is for projects which are created by `expo init`.

## Installation

- Create a project of your desired name by `expo init projectName` and selecting managed workflow.
- Install the given dependencies by opening a terminal at your project folder and copy-paste this commands and run them.

```sh
npm install --save @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer react-navigation-header-buttons redux react-redux redux-thunk @react-native-community/async-storage
```

- For expo, we will have to install other dependencies via `expo install`, which ensures that the package we download are appropriate one and that are compatible with the SDK version.

```sh
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- Copy the content of this folder into your own project
- If you're on a Mac and developing for iOS, you need to install pods to complete the linking. Make sure you have [Cocoapods](https://cocoapods.org/) installed. Then run:

```
npx pod-install ios
```

- Check all the packages are properly installed
- Test the project by `expo start`
- Enjoy !
