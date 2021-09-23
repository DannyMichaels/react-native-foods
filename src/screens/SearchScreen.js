import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelpApi from '../services/yelpApiConfig';

const SearchScreen = () => {
  const [results, setResults] = useState([]); // restaurants
  const [searchTerm, setSearchTerm] = useState('');

  const searchApi = async () => {
    let response = await yelpApi.get('/search');
    console.log({ response });
    return response;
  };

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={(newValue) => setSearchTerm(newValue)}
        onSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
