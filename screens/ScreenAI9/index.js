import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DocumentUploadScreen = () => {
  const [frontPhoto, setFrontPhoto] = useState(null);
  const [backPhoto, setBackPhoto] = useState(null);
  const [facePhoto, setFacePhoto] = useState(null);

  const handleFrontPhotoUpload = () => {// handle front photo upload logic
  };

  const handleBackPhotoUpload = () => {// handle back photo upload logic
  };

  const handleFacePhotoUpload = () => {// handle face photo upload logic
  };

  const handleSubmit = () => {// handle submit logic
  };

  return <Pressable onPress={() => {}}><View style={styles.container}>
      <Text style={styles.title}>Document Upload</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFrontPhotoUpload}>
        {frontPhoto ? <Image source={{
          uri: frontPhoto
        }} style={styles.uploadedImage} /> : <Text style={styles.uploadText}>Upload Document Front Photo</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleBackPhotoUpload}>
        {backPhoto ? <Image source={{
          uri: backPhoto
        }} style={styles.uploadedImage} /> : <Text style={styles.uploadText}>Upload Document Back Photo</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFacePhotoUpload}>
        {facePhoto ? <Image source={{
          uri: facePhoto
        }} style={styles.uploadedImage} /> : <Text style={styles.uploadText}>Upload Face Photo</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  uploadButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  submitButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default DocumentUploadScreen;