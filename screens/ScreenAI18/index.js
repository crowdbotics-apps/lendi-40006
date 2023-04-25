import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.section1}>
        <Image source={{
        uri: 'https://dummyimage.com/300x300/000/fff'
      }} style={styles.image} />
        <Text style={styles.name}>Product Name</Text>
        <Text style={styles.category}>Product Category</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget bibendum bibendum, velit elit bibendum ipsum, nec bibendum ipsum ipsum vitae velit.</Text>
        <Text style={styles.location}>123 Main Street, Anytown USA</Text>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  section1: {
    alignItems: 'center',
    marginBottom: 30
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  category: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  location: {
    fontSize: 16,
    color: '#888'
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;