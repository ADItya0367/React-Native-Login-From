
import { StatusBar as ExpostatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text,style, View, StatusBar, TextInput, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Animatable, { Image } from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


const github=require('../assets/github.png');
const home=require('../assets/home.png');

const purple=require('../assets/file.png');

export default function Splashscreen() {

  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.navi}>
       
      </View>
    
      <Image source={home} style={styles.image} resizeMode='contain' />
      <ExpostatusBar style="auto"/>
      <TouchableOpacity  title="Home"  style={styles.butt} onPress={()=>{alert("Home")}} >
        <Text style={styles.texx}>Let's Begin</Text>
        </TouchableOpacity>
        <Image source={purple} style={styles.im}  />
    </SafeAreaView>

  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4bcb3',
   
  },
 
  navi:{
    
    backgroundColor:"#c0c0c0",
    marginTop: StatusBar.currentHeight,
  },
 
  image:{
    width:'100%',
    height:553,
  },
 butt:{
    backgroundColor:'#323232',
    color:'black',
    padding:10,
    color:'white',
    borderRadius:30,
    textAlign:'center',
    alignItems:'center',
    width:200,
    marginLeft:130,
    marginTop:69,
    fontSize:20,
    fontWeight:'bold',
    height:50,
    zIndex:1,

 },
  texx:{
    color:'#FFE7C9',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  im:{
    width:'100%',
    height:553,
    position:'absolute',
    top:580,
    right:80,
  }
 
});
