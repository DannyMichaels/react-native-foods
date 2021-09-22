import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather'; // Feather, FontAwesome, and more

const SearchBar = () => {
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row', // make icon and textinput to be on same line
  },

  inputStyle: {
    flex: 1, // make textinput take as much space as possible instead of shoved to start.
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', // align self to center instead of align-items center on container so search input doesn't collapse
    marginHorizontal: 15, // spacing on left and right
  },
});

export default SearchBar;
