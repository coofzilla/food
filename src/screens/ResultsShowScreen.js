import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
  const [result, setResult] = useState(null);

  const {
    params: { id },
  } = useRoute();

  const getResult = async (id) => {
    //destructured from response
    const { data } = await yelp.get(`/${id}`);
    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
