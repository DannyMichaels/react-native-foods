import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      {/* a scrollable list, set to be horizontal */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantsList;
