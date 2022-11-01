import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase/config';


const Signup = ({navigation}) => {

  const [name, setName] = useState('')
  const [surname, setsurName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  
 
  //
  const testingFunction = () =>{
    console.log('i am working')
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('Login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  
  return (
    <View style={styles.container}>


      <View style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
        <Text style={{ textAlign: "center", margin: "15%", color: 'white' }}>Sign Up</Text>

        <TextInput style={[styles.inputs, { width: "80%", height: '7%' }]} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        <TextInput style={[styles.inputs, { width: "80%", height: '7%' }]}  onChange={(e)=>setsurName(e.target.value)} placeholder='Surname' />
        <TextInput style={[styles.inputs, { width: "80%", height: '7%' }]} onChange={(e)=>setContact(e.target.value)} placeholder='Contact' />
        <TextInput style={[styles.inputs, { width: "80%", height: '7%' }]} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <TextInput style={[styles.inputs, { width: "80%", height: '7%' }]}  onChange={(e)=>setPassword(e.target.value)}placeholder='password' />
        <Text onPress={()=>testingFunction()} style={styles.button}>Sign Up</Text>
        <Text style={styles.Text}>

      have an account? <Text style={{color:'orange'}}>Signin</Text>

</Text>

      </View>


    </View>


  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  button: {
    backgroundColor: 'orange',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    textAlign: 'center',
    marginTop: 30,
    borderRadius: 10
  },
  inputs: {
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: "white"
  },
  Text: {
    textAlign: 'center',
    color: 'white'
  }
})