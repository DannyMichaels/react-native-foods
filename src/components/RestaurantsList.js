import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantsList = ({ title, results, navigation }) => {
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
              // when pressing this component opacity changes
              onPress={() => navigation.navigate('RestaurantsShow')}>
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

export default RestaurantsList;
