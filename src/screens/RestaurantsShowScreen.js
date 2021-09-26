import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelpApi from '../services/yelpApi';

const getOneRestaurant = async (id) => {
  const response = await yelpApi.get(`/${id}`);
  return response.data;
};

// a screen that shows data regarding ONE restaurant.
const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id'); // accessing id that was passed to this component with navigation.navigate

  useEffect(() => {
    const fetchRestaurantOnMount = async () => {
      const oneRestaurant = await getOneRestaurant(id);
      setRestaurant(oneRestaurant);
    };

    fetchRestaurantOnMount();
  }, []);

  if (!restaurant) return null;

  return (
    <View>
      <Text>{restaurant.name}</Text>

      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo} // all photos are unique strings, so theyre safe to use as keys
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantsShowScreen;
