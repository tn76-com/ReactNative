// LocalGallery.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LocalGallery = ({ images }) => {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Image key={index} source={image} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100, // Adjust according to your preference
    height: 100, // Adjust according to your preference
    margin: 5,
  },
});

export default LocalGallery;
