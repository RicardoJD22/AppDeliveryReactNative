import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image
     source={require('./assets/chef.jpg')} 
     style={ styles.imageBackground}
     />

    <View style={styles.logoContainer}>
     <Image
     source={require('./assets/logo.png')}
     />
     <Text>FOOD APP</Text>
    </View>

    <View style={ styles.form}>
   
    </View>

    </View>
  );
}

// HOT RELOAD

const styles = StyleSheet.create({
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
    backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  
  logoContainer: {
    position: 'absolute'
  }

});
