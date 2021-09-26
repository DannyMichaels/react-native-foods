import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation'; // allows us to access navigation prop without having to pass it from screen to child
import RestaurantDetail from './RestaurantDetail';

const RestaurantsList = ({ title, results, navigation }) => {
  if (!results.length) return null; // don't return the row if there's nothing to show.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {/* a scrollable list, set to be horizontal */}
      <FlatList
        horizontal // make list horizontal
        showsHorizontalScrollIndicator={false} // make scrollbar hidden.
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // TouchableOpacity: when pressing this component opacity changes
              onPress={() =>
                navigation.navigate('RestaurantsShow', { id: item.id })
              }>
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(RestaurantsList);
