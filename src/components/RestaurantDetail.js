import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantDetail = ({ restaurant }) => {
  const { review_count, rating, name, image_url } = restaurant;

  return (
    <View>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120, // height and width must be added in react native or image won't show.
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default RestaurantDetail;
