
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text,style, View, TextInput, TouchableOpacity } from 'react-native';
import Animatable, { Image } from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const logo=require('./assets/key.png');
const facebook=require('./assets/facebook.png');
const github=require('./assets/github.png');
const linkedin=require('./assets/linkedin.png');

export default function App() {

   const onPressLogin=()=>{
    console.log('Login Karo!')
   }
   const onPressRegister=()=>{
    console.log('Register karo ')
   }
   const onPressForgotButton=()=>{
    console.log('Forgotten!' )
 }

   const [state, setstate] = useState({
    email:'',
    Password:''
   })


  return (
    <View style={styles.container}>
      
      <Image source={logo} style={styles.image} resizeMode='contain' />
    
      <Text style={styles.title}>Lon from</Text>
    
      <View style={styles.inputView}>
      <TextInput style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#000000"
      onChangeText={(text)=>setstate({email:Text})}
      />
    </View>
     <View style={styles.inputView}>
      <TextInput style={styles.inputText}
      placeholder='Password'
      placeholderTextColor="#000000"
      onChangeText={(text)=>setstate({Password:Text})}
      />
     </View>
      <TouchableOpacity
      onPress={onPressForgotButton}
      >  
        <Text style={styles.ForgetText}>Forget Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={onPressRegister}
      >
      <Text style={styles.SignupText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={onPressLogin}
       style={styles.LoginBtn}
      >
      <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.mediaIcons}>
        <Image source={linkedin} style={styles.mainpng}/>
        <Image source={github} style={styles.mainpng}/>
        <Image source={facebook} style={styles.mainpng}/>
      </View>
    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
pehla:{
   color:"#000000"
},
   
  title:{
   fontSize:50,
   fontWeight:"bold",
   color:"#000000",
    marginBottom:40
  },
   inputView:{
    width:"80%",
    height:50,
    marginBottom:20,
    borderRadius:25,
    backgroundColor:"#c4bcb3",
    justifyContent:"center",
    padding:20,
    borderColor : "black",
    borderWidth : 1,
    borderRadius: 7
   },
  inputText:{
    // code here
    width:50,
    height:50,
    backgroundColor:"#black"
    
    
  },
  image:{
    width:200,
    height:150
  },
  mediaIcons : {
    flexDirection :"row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23,
    marginTop:5
  },
  mainpng:{
    
     width:40,
     height:40
  },
  LoginBtn:{
    width:"80%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    },
   LoginText:{
    color:"white"
   },

});
