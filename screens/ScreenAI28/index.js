import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MyItemsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={require('../assets/item1.jpg')} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Item 1</Text>
          <Text style={styles.itemCategory}>Category</Text>
          <Text style={styles.itemDescription}>Short summary of the item</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Pressable onPress={() => {
            navigation.navigate("ScreenAI29");
          }}><Text style={styles.detailsButtonText}>See Details</Text></Pressable>
          </TouchableOpacity>
        </View>
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI30");
    }}><Text style={styles.OugNMEod}>Add a new item for rent</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
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
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemCategory: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 10
  },
  detailsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  OugNMEod: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "left",
    position: "absolute",
    top: 0,
    color: "#000000"
  }
});
export default MyItemsScreen;