import React, { useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';

import { View, Text, StyleSheet } from 'react-native';
import RestaurantsList from '../components/RestaurantsList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchApi, results, errorMessage] = useRestaurants();

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <RestaurantsList title="Cost Effective" />
      <RestaurantsList title="Bit Pricier" />
      <RestaurantsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
