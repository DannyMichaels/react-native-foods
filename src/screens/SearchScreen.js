import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelpApi from '../services/yelpApiConfig';

const SearchScreen = () => {
  const [results, setResults] = useState([]); // restaurants
  const [searchTerm, setSearchTerm] = useState('');

  const searchApi = async () => {
    let response = await yelpApi.get('/search', {
      // query string
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose',
      },
    });

    console.log('results:', response.data.businesses);
    setResults(response.data.businesses);
  };

  console.log('env', process.env);

  console.log('yelp token', process.env['REACT_APP_YELP_API_TOKEN']);

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
