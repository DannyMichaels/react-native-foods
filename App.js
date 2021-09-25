import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import SearchScreen from './src/screens/SearchScreen';
import RestaurantsShowScreen from './src/screens/RestaurantsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen, // key and route value
    RestaurantsShow: RestaurantsShowScreen,
  },
  {
    initialRouteName: 'Search', // first route on mount
    defaultNavigationOptions: {
      title: 'Business Search', // title of route on header
    },
  }
);

export default createAppContainer(navigator);
