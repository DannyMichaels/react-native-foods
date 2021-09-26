import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id'); // accessing id that was passed to this component with navigation.navigate

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsShowScreen;
