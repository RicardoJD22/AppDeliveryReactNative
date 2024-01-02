import React from 'react'
import {  Text,TouchableOpacity, StyleSheet} from 'react-native'

interface Props {
    text: string
}

export const RounderButton = ({text}: Props) => {
  return (
    <TouchableOpacity 
    style={styles.rounderButton}
    onPress={()=>{}}
    >
    <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
   rounderButton: { 
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
   },

   textButton: {
    color: 'white',
    fontWeight: 'bold'
   }

});
