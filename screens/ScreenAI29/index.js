import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/600x400/000/fff'
    }} style={styles.image} />
      <Text style={styles.name}>Product Name</Text>
      <Text style={styles.category}>Product Category</Text>
      <Text style={styles.description}>Product Description</Text>
      <Text style={styles.location}>Location - Street Address</Text>
      <Text style={styles.availability}>Product Availability</Text>
      <Text style={styles.price}>Product Price</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  category: {
    fontSize: 18,
    marginTop: 10
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  location: {
    fontSize: 16,
    marginTop: 10
  },
  availability: {
    fontSize: 16,
    marginTop: 10
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  }
});
export default ScreenComponent;