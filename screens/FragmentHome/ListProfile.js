import { View, Text, FlatList, ImageBackground, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../styles/ProfileList.style'
import initFirebase from '../../config/index'

export default function ListProfile() {
  const database = initFirebase.database();
  const [data, setData] = useState([])
  const ref_profils = database.ref("profiles")


  useEffect(() => {
    ref_profils.on("value", (dataSnapShop)=>{
      let d = [];
      dataSnapShop.forEach((profile) => {
        database.push(profile.val())
      })
      setData(d)
    })
    
    return () => {
      ref_profils.off();
    }

  }, [])
  

  return (
    <ImageBackground style={styles.container} source={require("../../assets/background.jpg")}>



      <View style={styles.container2}>

        <Text style={styles.profileText1}>List of profiles</Text>

        <FlatList
          style={{ width: "100%", height: "100%" }}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.profileItem}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/Screenshot_2022-08-29_124116-removebg-preview.jpg')}
              />
              <Text style={styles.profileText}>{item.nom}</Text>
              <Text style={styles.profileText}>{item.prenom}</Text>
              <Text style={styles.profileText}>{item.pseudo}</Text>
            </View>
          )}
        >

        </FlatList>

      </View>


    </ImageBackground>
  )
}


//! NOT RETRIEVING DATA FROM DATABASE