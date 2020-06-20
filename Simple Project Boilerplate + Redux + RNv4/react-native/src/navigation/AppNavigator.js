import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import HeartScreen from '../screens/HeartScreen';
import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.header,
        shadowColor: Colors.header,
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
  Heart: {
    screen: HeartScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.header,
        shadowColor: Colors.header,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
    },
  },
});

export default createAppContainer(AppNavigator);
