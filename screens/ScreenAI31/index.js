import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(false);
  return <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Account Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Payments History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI32");
      }}><Text style={styles.buttonText}>My Wallet</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Notifications</Text>
        <Switch value={notifications} onValueChange={value => setNotifications(value)} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Frequently Asked Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Support / Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  button: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  logoutButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});
export default AccountScreen;