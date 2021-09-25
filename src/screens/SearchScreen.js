import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelpApi from '../services/yelpApiConfig';

const SearchScreen = () => {
  const [results, setResults] = useState([]); // restaurants
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      let response = await yelpApi.get('/search', {
        // query string
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
