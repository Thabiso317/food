import React, { useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, TextInput, View ,Image,Text, TouchableOpacity} from 'react-native';
import { YellowBox } from 'react-native-web';
import image from './assets/th.jpg'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from './firebase/config';




const Login = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   const logFunction=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('you ok');
      navigation.navigate('UserHome')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  
   }
 
    return(
         
          <View style={styles.container}>  
          <View style={{width:"100%",height:"50%"}}>
            <Image source={image} style={{width:'100%',height:"100%"}}/>
        
            </View> 
            
            <View  style={{width:"100%",height:"50%", alignItems:'center', justifyContent:'center',backgroundColor:'darkgray'}}>
                <View><Text style={styles.Text}>Don't have your account?SignUp</Text></View>
              <View><Text > Login into your account</Text></View>
                <TextInput style={[styles.inputs , {width:"80%", height:'10%'}]} value={email} onChangeText={(text)=>setEmail(text)} placeholder='email' />
                <TextInput  style={[styles.inputs , {width:"80%", height:'10%'}]} value={password} onChangeText={(text)=>setPassword(text)} placeholder='password' />
                <View><Text >Forgot Passward</Text></View>
                <View><Text style={styles.Text}>Forgot your password</Text></View>
                <TouchableOpacity  onPress={logFunction} style={styles.button}>
                
                  <Text>Login In</Text>
                  
                </TouchableOpacity>
                
               <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>  
               
                <View>
                  <Text >
                    Don't have your account? SignUp </Text>
                </View>
                </TouchableOpacity>
             
            </View>
          </View>
             
         
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
       justifyContent:'center',
       alignItems:'center',
       flex:1
  } ,
  button:{
    backgroundColor:'orange',
    width:'90%',
    alignSelf:'center',
    padding:10,
    textAlign:'center',
    marginTop:30,
    borderRadius:10
  },
  inputs:{
    borderWidth:1,
    marginTop:30,
    backgroundColor:'white',
    borderRadius:10
  },
  Text:{
    color:'white',
    marginBottom:10
  }
})