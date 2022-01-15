import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e6e6e6',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
