import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 200,
    },

    profileItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '#111B',
        padding: 5

    },

    profileText1: {
        color: '#FFFC', 
        fontSize: 30,
        minWidth: 50,
    }, 

    profileText: {
        color: '#FFFC', 
        fontSize: 15,
        minWidth: 50,
    }, 

    container2: {
        width: "95%",
        backgroundColor: '#0004',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 10,
        marginTop:20,
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
        height: 45,
        textAlign: 'center',
      },

    
});