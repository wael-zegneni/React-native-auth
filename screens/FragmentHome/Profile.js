import { View, Text, Image, ImageBackground, TextInput, Button, Platform, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Profile.styles'
import React, { useState, useEffect } from 'react';
import initFirebase from '../../config/index'
import * as ImagePicker from 'expo-image-picker';



export default function Profile() {

  const [image, setImage] = useState(null);

  const storage = initFirebase.storage();

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [pseudo, setPseudo] = useState("")
  const database = initFirebase.database()

  async function imageToBlob(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e)
        reject(new TypeError("Network request failed"))
      }
      xhr.responseType = "blob"
      xhr.open ("GET", uri, true)
      xhr.send(null)
    })
    return blob;
  }

  // this function changes the path of an image from local to hosted.
  const uploadImage = async (uri) => {
    // convert image to blob.
    // save blob into reference image.
    // get download url.
    const blob = await imageToBlob(uri)
    // save blob into reference image.
    const ref_image = storage.ref().child("imagesprofiles").child("image.jpg")
    await ref_image.put(blob)
    // get download url
    const url = await ref_image.getDownloadURL();
    return url
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground style={styles.container} source={require("../../assets/background.jpg")}>
      <Text style={styles.profileText}>Profile</Text>

      {image ? 
      <TouchableOpacity onPress = {() => {pickImage()}}>
        <Image source={{ uri: image }} style={styles.tinyLogo}  /> 
      </TouchableOpacity>
      : 
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/Screenshot_2022-08-29_124116-removebg-preview.jpg')}
      />}

      <View style={styles.container2}>
        <TextInput style={styles.inputText} keyboardType="email-address" placeholder="enter your name" onChangeText={(e) => setName(e)}></TextInput>
        <TextInput style={styles.inputText} keyboardType="email-address" placeholder="enter your surname" onChangeText={(e) => setSurname(e)}></TextInput>
        <TextInput style={styles.inputText} keyboardType="email-address" placeholder="enter your pseudo" onChangeText={(e) => setPseudo(e)}></TextInput>
        <Button
          title="Save"
          color="#841584"
          onPress={async () => {
            if (image !== null) {
              const url = await uploadImage(image)
              const ref_profiles = database.ref("profiles")
              const key = ref_profiles.push().key;
              ref_profiles.child("profile" + key).set({
                name: name,
                surname: surname,
                pseudo: pseudo,
                url: url
              })
            }
          }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    </ImageBackground>
  );
}