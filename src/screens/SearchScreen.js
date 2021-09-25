import React, { useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';

import { View, Text, StyleSheet } from 'react-native';
import RestaurantsList from '../components/RestaurantsList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <RestaurantsList
        results={filterResultsByPrice('$')}
        title="Cost Effective"
      />
      <RestaurantsList
        results={filterResultsByPrice('$$')}
        title="Bit Pricier"
      />
      <RestaurantsList
        results={filterResultsByPrice('$$$')}
        title="Big Spender"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
