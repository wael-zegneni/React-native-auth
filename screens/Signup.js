import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import initFirebase from '../config/index'
import {styles} from '../styles/Auth.styles'

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const auth = initFirebase.auth()
  return (
    <ImageBackground style={styles.container} source={require("../assets/background.jpg")}>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <Text style={styles.authText}>Authentication</Text>
        <TextInput style={styles.inputText} keyboardType="email-address" placeholder="enter your email" onChangeText={(e) => setEmail(e)}></TextInput>
        <TextInput style={styles.inputText} secureTextEntry={true} placeholder="password" onChangeText={(e) => setPassword(e)}></TextInput>
        <Button
          title = "Login"
          color="#841584"
          onPress={() => {
            auth.createUserWithEmailAndPassword(email, password)
            .then(()=> {})
            .catch((err) => {})
          }}
        />
      </View>
    </ImageBackground>
  );
}


