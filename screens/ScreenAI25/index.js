import { View, Text, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.timeFrame}>
          <Text style={styles.timeFrameText}>Selected Time Frame</Text>
          <View style={styles.timeFrameDetails}>
            <Text style={styles.timeFrameDetailsText}>Day/Days</Text>
            <Text style={styles.timeFrameDetailsText}>Time</Text>
            <Text style={styles.timeFrameDetailsText}>From</Text>
            <Text style={styles.timeFrameDetailsText}>To</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.priceDetailsText}>Total price: 50%</Text>
            <Text style={styles.priceDetailsText}>Deposit: $100</Text>
            <View style={styles.insuranceDetails}>
              <Text style={styles.insuranceDetailsText}>Insurance:</Text>
              <Text style={styles.insuranceDetailsText}>Price - amount</Text>
              <Text style={styles.insuranceDetailsText}>Yes/No</Text>
            </View>
            <Text style={styles.priceDetailsText}>Total cost: $500</Text>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <Image source={{
        uri: 'https://dummyimage.com/200x200/000/fff'
      }} style={styles.image} />
        <Text style={styles.name}>Item Name</Text>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.location}>Location - Street Address</Text>
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
    marginBottom: 30
  },
  timeFrame: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10
  },
  timeFrameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  timeFrameDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  timeFrameDetailsText: {
    fontSize: 16
  },
  priceDetails: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20
  },
  priceDetailsText: {
    fontSize: 16,
    marginBottom: 10
  },
  insuranceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  insuranceDetailsText: {
    fontSize: 16
  },
  section2: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  category: {
    fontSize: 16,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  location: {
    fontSize: 16
  }
});
export default ScreenComponent;