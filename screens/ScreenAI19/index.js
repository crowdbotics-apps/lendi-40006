import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.profile}>
          <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.profilePic} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.location}>123 Main St, Anytown USA</Text>
            <View style={styles.rating}>
              <Image source={{
              uri: 'https://dummyimage.com/20x20/000/fff'
            }} style={styles.star} />
              <Image source={{
              uri: 'https://dummyimage.com/20x20/000/fff'
            }} style={styles.star} />
              <Image source={{
              uri: 'https://dummyimage.com/20x20/000/fff'
            }} style={styles.star} />
              <Image source={{
              uri: 'https://dummyimage.com/20x20/000/fff'
            }} style={styles.star} />
              <Image source={{
              uri: 'https://dummyimage.com/20x20/000/fff'
            }} style={styles.star} />
              <Text style={styles.ratingText}>(5)</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>Direct Message</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <View style={styles.item}>
          <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Item 1</Text>
            <Text style={styles.itemCategory}>Category</Text>
            <Text style={styles.itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  profileInfo: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    marginRight: 5
  },
  ratingText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5
  },
  messageButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  messageText: {
    color: '#fff',
    fontSize: 16
  },
  section2: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 20
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemCategory: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  itemDescription: {
    fontSize: 16,
    color: '#666'
  }
});
export default ScreenComponent;