import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LikedItemsScreen = () => {
  const item1 = {
    name: 'Item 1',
    category: 'Category 1',
    description: 'Short summary of item 1',
    location: '123 Main St, Anytown USA',
    image: require('../assets/item1.jpg')
  };
  return <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={item1.image} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.name}>{item1.name}</Text>
          <Text style={styles.category}>{item1.category}</Text>
          <Text style={styles.description}>{item1.description}</Text>
          <Text style={styles.location}>{item1.location}</Text>
          <TouchableOpacity style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  itemDetails: {
    flex: 1,
    marginLeft: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    marginBottom: 5
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  showMoreButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  showMoreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
export default LikedItemsScreen;