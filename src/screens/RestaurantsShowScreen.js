import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelpApi from '../services/yelpApi';

const getRestaurant = async (id) => {
  const response = await yelpApi.get(`/${id}`);
  return response.data;
};

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id'); // accessing id that was passed to this component with navigation.navigate

  useEffect(() => {
    const fetchRestaurantOnMount = async () => {
      const oneRestaurant = await getRestaurant(id);
      setRestaurant(oneRestaurant);
    };

    fetchRestaurantOnMount();
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsShowScreen;
