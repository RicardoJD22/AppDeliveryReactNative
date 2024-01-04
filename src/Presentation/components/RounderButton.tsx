import React from 'react'
import {  Text,TouchableOpacity, StyleSheet} from 'react-native'
import { MyColors } from '../theme/Apptheme'

interface Props {
    text: string, 
    onPress: () => void
}

export const RounderButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity 
    style={styles.rounderButton}
    onPress={()=>onPress()}
    >
    <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
   rounderButton: { 
    width: '100%',
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
   },

   textButton: {
    color: 'white',
    fontWeight: 'bold'
   }

});
