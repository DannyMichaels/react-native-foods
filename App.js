import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen, // key and route value
  },
  {
    initialRouteName: 'Search', // first route on mount
    defaultNavigationOptions: {
      title: 'Business Search', // title of route on header
    },
  }
);

export default createAppContainer(navigator);
