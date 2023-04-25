import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI11");
      }}><Text style={styles.AsIDpirO}>My reviews</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={styles.StVqGNKI}>Notification</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={styles.UveiLiXo}>My Favorites</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled15");
      }}><Text style={styles.hekFoKxK}>Specific item</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI24");
      }}><Text style={styles.NsEgTgOU}>My Bookings</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  AsIDpirO: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  StVqGNKI: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  UveiLiXo: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  hekFoKxK: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NsEgTgOU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled10;