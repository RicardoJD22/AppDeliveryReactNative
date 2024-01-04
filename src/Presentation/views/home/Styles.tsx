import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
  
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      opacity: 0.8,
      bottom: '30%'
    },
    form: {
      width: '100%',
      height: '40%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 30
    },
  
    formText: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    },
    formTextInput: {
      flex: 1,
      fontSize: 17,
      borderBottomWidth: 1,
      borderBottomColor: 'green',
      marginLeft: 15
    },
    formInput: {
      flexDirection: 'row',
      marginTop: 30
    },
    formIcon: {
      width: 25,
      height: 25,
      marginTop: 5
    },
    formRegister: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
    },
    formRegisterText: {
      fontStyle: 'italic',
      color: 'orange',
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      fontWeight: 'bold',
      marginLeft: 10
    },
  
    logoContainer: {
      position: 'absolute',
      alignSelf: 'center',
      top: '15%'
    },
  
    logoImage: {
      width: 100,
      height: 100
    },
  
    logoText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold'
    },
  
  
  
  });
  
  export default HomeStyles;