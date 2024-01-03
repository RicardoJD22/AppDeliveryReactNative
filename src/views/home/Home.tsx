import React from 'react'
import { Image, View, Text, TextInput, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import { RounderButton } from '../../components/RounderButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {


    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
         <Image
         source={require('../../../assets/chef.jpg')} 
         style={ styles.imageBackground}
         />
    
        <View style={styles.logoContainer}>
         <Image
         source={require('../../../assets/logo.png')}
         style={ styles.logoImage}
         />
         <Text style={styles.logoText}>FOOD APP</Text>
        </View>
    
        <View style={styles.form}>
         
         <Text style={styles.formText}>Ingresar</Text>
    
         <View style={styles.formInput}>
         <Image 
         style={styles.formIcon}
         source={require('../../../assets/email.png')}
         />
     
         <TextInput style={styles.formTextInput} 
         placeholder='Correo electronico' 
         keyboardType='email-address'
         />
         </View>
    
         <View style={styles.formInput}>
         <Image 
         style={styles.formIcon}
         source={require('../../../assets/password.png')}
         />
     
         <TextInput style={styles.formTextInput} 
         placeholder='Contraseña' 
         keyboardType='default'
         secureTextEntry={true}
         />
         </View>
    
         <View style={{marginTop: 40 }}>
         
           <RounderButton text='INICIAR SESIÓN' onPress={() => ToastAndroid.show('HOLA',ToastAndroid.SHORT)}/>
    
         </View>
        <View style={styles.formRegister}>
           <Text>No tiene una cuenta?</Text>
           <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}>
           <Text style={styles.formRegisterText}>Registrate</Text> 
           </TouchableOpacity>
          
        </View>     
         
    
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
        borderTopRightRadius: 40,
        padding: 30
      },
      
      formText:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
      },
      formTextInput:{
        flex:1,
        fontSize: 17,
        borderBottomWidth:1,
        borderBottomColor: 'green',
        marginLeft: 15
      },
      formInput:{
        flexDirection: 'row',
        marginTop: 30
      },
      formIcon:{
       width: 25,
       height: 25,
       marginTop: 5
      },
      formRegister:{
       flexDirection: 'row',
       justifyContent: 'center',
       marginTop: 30
      },
      formRegisterText:{
      fontStyle: 'italic',
      color: 'orange',
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      fontWeight: 'bold',
      marginLeft: 10
      },
    
      logoContainer: {
        position: 'absolute',
        alignSelf:'center',
        top: '15%'
      },
    
      logoImage:{
        width:100,
        height: 100
      },
    
      logoText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20, 
        marginTop: 10,
        fontWeight: 'bold'
      },
    
      
    
    });
