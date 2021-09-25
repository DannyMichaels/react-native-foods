import React, { useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    // empty fragments to return content or View with flex: 1 style
    <>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? (
        <Text style={{ marginLeft: 15, marginBottom: 10 }}>{errorMessage}</Text>
      ) : null}

      {/* Scrollable vertically with ScrollView */}
      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
