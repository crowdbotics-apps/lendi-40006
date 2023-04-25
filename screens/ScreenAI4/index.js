import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {// handle sign up logic
  };

  const handleTermsAndConditions = () => {// handle terms and conditions logic
  };

  const handlePrivacyPolicy = () => {// handle privacy policy logic
  };

  const handleForgotPassword = () => {// handle forgot password logic
  };

  const handleRememberMe = () => {
    setIsChecked(!isChecked);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Create password" secureTextEntry value={password} onChangeText={setPassword} />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleRememberMe}>
          <View style={styles.checkbox}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>I have read Terms and Conditions and Privacy Policy</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTermsAndConditions}>
          <Pressable onPress={() => {
          navigation.navigate("termsAndConditions");
        }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
          <Pressable onPress={() => {
          navigation.navigate("privacyPolicy");
        }}><Text style={styles.buttonText}>Privacy Policy</Text></Pressable>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><Text style={styles.buttonText}>Sign up</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Text style={styles.title}>Log in</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleRememberMe}>
          <View style={styles.checkbox}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Pressable onPress={() => {
      navigation.navigate("forgotPassword");
    }}><View style={styles.separator} /></Pressable>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in via Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in via Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in via Facebook</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 20,
    height: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkmark: {
    fontSize: 16,
    color: '#000'
  },
  checkboxLabel: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20
  }
});
export default SignUpScreen;