import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ReviewScreen = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <Text style={styles.averageRating}>4.5</Text>
        <Image source={require('../assets/star.png')} style={styles.starIcon} />
        <Image source={require('../assets/star.png')} style={styles.starIcon} />
        <Image source={require('../assets/star.png')} style={styles.starIcon} />
        <Image source={require('../assets/star.png')} style={styles.starIcon} />
        <Image source={require('../assets/half_star.png')} style={styles.starIcon} />
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.review}>
          <Text style={styles.reviewRate}>4.0</Text>
          <Text style={styles.reviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum sapien.</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('../assets/profile_picture.png')} style={styles.profilePicture} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.reviewDate}>June 1, 2021 - 10:30 AM</Text>
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
    paddingTop: 50
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  averageRating: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 10
  },
  starIcon: {
    width: 25,
    height: 25
  },
  reviewContainer: {
    flex: 1
  },
  review: {
    marginBottom: 20
  },
  reviewRate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reviewText: {
    fontSize: 16,
    lineHeight: 24
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  reviewDate: {
    fontSize: 14,
    color: '#999'
  }
});
export default ReviewScreen;