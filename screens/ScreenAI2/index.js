import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [streetAddress, setStreetAddress] = useState('123 Main St');
  const [city, setCity] = useState('New York');
  const [zipCode, setZipCode] = useState('10001');
  const [state, setState] = useState('NY');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSaveChanges = () => {// Save changes made in edit mode
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleFullNameChange = text => {
    setFullName(text);
  };

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
  };

  const handleStreetAddressChange = text => {
    setStreetAddress(text);
  };

  const handleCityChange = text => {
    setCity(text);
  };

  const handleZipCodeChange = text => {
    setZipCode(text);
  };

  const handleStateChange = text => {
    setState(text);
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.changeAvatarContainer}>
          <Image source={require('../assets/camera.png')} style={styles.cameraIcon} />
          <Text style={styles.changeAvatarText}>Change Avatar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={handleFullNameChange} editable={isEditMode} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value={phoneNumber} onChangeText={handlePhoneNumberChange} editable={isEditMode} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Street Address</Text>
        <TextInput style={styles.input} value={streetAddress} onChangeText={handleStreetAddressChange} editable={isEditMode} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} value={city} onChangeText={handleCityChange} editable={isEditMode} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput style={styles.input} value={zipCode} onChangeText={handleZipCodeChange} editable={isEditMode} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>State</Text>
        <TextInput style={styles.input} value={state} onChangeText={handleStateChange} editable={isEditMode} />
      </View>
      {!isEditMode ? <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity> : <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><View style={styles.editModeButtonsContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View></Pressable>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  changeAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  cameraIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  changeAvatarText: {
    color: '#007AFF',
    fontWeight: 'bold'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  editModeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
export default UserProfileScreen;