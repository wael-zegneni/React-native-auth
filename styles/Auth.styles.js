import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000B',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container2: {
      height: 350,
      width: "90%",
      backgroundColor: '#0009',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20,
    },
  
    authText: {
      textAlign: 'center',
      color: 'gold',
      fontSize: 40,
      marginBottom: 10,
      textShadow: '3 3 3 #00F9',
    },
  
  
    inputText: {
      backgroundColor: '#FFFD',
      borderRadius: 6,
      padding: 5,
      margin: 15,
      width: '80%',
      height: 50,
      textAlign: 'center',
    },
  
    registerText:{
      fontSize:15,
      color: 'white',
      marginTop: 10,
    }
  
  });