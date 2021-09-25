import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather'; // Feather, FontAwesome, and more

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none" // capitalize first letter
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={value}
        onChangeText={onChange}
        onEndEditing={onSubmit} // runs when user taps return on iOS keyboard or checkmark on android
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row', // make icon and textinput to be on same line
    marginBottom: 10,
  },

  inputStyle: {
    flex: 1, // make textinput take as much space as possible instead of shoved to start.
    fontSize: 18,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', // align self to center instead of align-items center on container so search input doesn't collapse
    marginHorizontal: 15, // spacing on left and right
  },
});

export default SearchBar;
