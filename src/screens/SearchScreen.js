import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar
        value={searchTerm}
        onChange={(newValue) => setSearchTerm(newValue)}
        onSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Screen</Text>
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
