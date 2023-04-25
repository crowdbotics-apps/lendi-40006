import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const bookings = [{
  id: 1,
  rentId: 'RNT123',
  item: 'Bicycle',
  image: require('../assets/bicycle.jpg'),
  name: 'Bicycle Rental'
}, {
  id: 2,
  rentId: 'RNT456',
  item: 'Scooter',
  image: require('../assets/scooter.jpg'),
  name: 'Scooter Rental'
}, {
  id: 3,
  rentId: 'RNT789',
  item: 'Car',
  image: require('../assets/car.jpg'),
  name: 'Car Rental'
}];

const BookingsScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Ongoing Bookings</Text>
      {bookings.map(booking => <View key={booking.id} style={styles.bookingContainer}>
          <Image source={booking.image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{booking.name}</Text>
            <Text style={styles.rentId}>Rent ID: {booking.rentId}</Text>
            <Text style={styles.item}>Item: {booking.item}</Text>
            <TouchableOpacity style={styles.button}>
              <Pressable><Text style={styles.buttonText}>Show Details</Text></Pressable>
            </TouchableOpacity>
          </View>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  bookingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20
  },
  detailsContainer: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  rentId: {
    fontSize: 16,
    marginBottom: 5
  },
  item: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default BookingsScreen;