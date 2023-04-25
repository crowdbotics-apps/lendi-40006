import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const RentItemScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
  };

  return <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{
        uri: 'https://via.placeholder.com/150'
      }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>Item Title</Text>
          <Text style={styles.itemDescription}>Item Description</Text>
          <Text style={styles.itemPrice}>$10 per day</Text>
        </View>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar onDayPress={handleDateSelect} markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: '#2E8B57'
        }
      }} />
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20
  },
  itemDetails: {
    flex: 1
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 5
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  calendarContainer: {
    marginVertical: 20
  },
  bookButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default RentItemScreen;