import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/600x400/000/fff'
    }} style={styles.image} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.category}></Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo quis lorem bibendum, vel bibendum velit bibendum.{' '}
      </Text>
      <Text style={styles.location}>New York, NY</Text>
      <View style={styles.availabilityContainer}>
        <Text style={styles.availabilityTitle}>Availability per week:</Text>
        <View style={styles.availability}>
          <Text style={styles.availabilityText}>Monday - Friday</Text>
          <Text style={styles.availabilityText}>9:00 AM - 5:00 PM</Text>
        </View>
        <Text style={styles.availabilityTitle}>Availability per day:</Text>
        <View style={styles.availability}>
          <Text style={styles.availabilityText}>Monday</Text>
          <Text style={styles.availabilityText}>9:00 AM - 5:00 PM</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price per hour:</Text>
        <Text style={styles.price}>$50</Text>
        <Text style={styles.priceTitle}>Price per day:</Text>
        <Text style={styles.price}>$200</Text>
        <Text style={styles.priceTitle}>Price per week:</Text>
        <Text style={styles.price}>$800</Text>
        <Text style={styles.priceTitle}>Price per month:</Text>
        <Text style={styles.price}>$3000</Text>
        <Text style={styles.priceTitle}>Deposit:</Text>
        <Text style={styles.price}>$100</Text>
        <Text style={styles.priceTitle}>Transaction fee:</Text>
        <Text style={styles.price}>$10</Text>
      </View>
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
    color: '#888',
    marginTop: 5
  },
  description: {
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  location: {
    fontSize: 16,
    color: '#888',
    marginTop: 20
  },
  availabilityContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  availability: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  availabilityText: {
    fontSize: 16
  },
  priceContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default ScreenComponent;