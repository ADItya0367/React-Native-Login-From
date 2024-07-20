import React from 'react';
import {View,TextInput,TouchableOpacity,Text,StyleSheet,Image,StatusBar} from 'react-native';
import first from '../assets/second.png';

export default function Screen1() {
  return (
     
    <View style={styles.container}>
      <Image source={second} style={styles.image} resizeMode='contain' />
        <StatusBar style="auto"/>
     
    </View>
     
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c4bcb3'
    }
})