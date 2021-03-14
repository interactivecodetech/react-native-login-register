import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function LoginScreen(props) {
  const [userId, setUserId] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.content}>
          <View style={styles.topSection}>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/sample-logo-design-png-3.png')}
              />
            </View>
            <View>
                <Text style={styles.heading}>Welcome Back</Text>
                <Text style={styles.para}>You can search course, apply course and fidn scholarship for abraod studies.</Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <View style={[styles.shadowBox,styles.socialButtons]}>
                <Text style={{ textAlign: 'center', fontWeight: 'normal' }}>Google</Text>
              </View>
              <View style={[styles.shadowBox,styles.socialButtons]}>
                <Text style={{ textAlign: 'center', fontWeight: '100' }}>Facebook</Text>
              </View>
            </View>
          </View>

          <View style={styles.inputs}>
            <TextInput
              label="Your  ID"
              placeholder="Enter User Name"
              onChangeText={text => setUserId(text)}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Your  ID"
              placeholder="Enter your password"
              onChangeText={text => setUserId(text)}
              mode="outlined"
              style={styles.input}
            />

            <TouchableOpacity
            title="Login"
            style={styles.button}>
              <Text style={styles.loginTexts}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10 }}><Text style={{ textAlign: 'center', color: '#db153c' }}>Forgot password?</Text></TouchableOpacity>
          </View>
          
      </View>

      <TouchableOpacity onPress={ ()=> props.navigation.navigate('Register') } style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}><Text style={{ color: '#db153c', textAlign: 'center', padding: 10 }}>Don't have an account? Join us</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topSection: {
    textAlign: 'center',
    marginBottom: 20
  },
  para: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  content: {
    alignSelf: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 80
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 10
  },
  tinyLogo: {
    width: 200,
    height: 100,
    margin: 'auto',
    alignSelf: 'center',
    marginBottom: 40
  },
  socialButtons: {
    width: '46%',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#db153c',
    elevation: 5,
    shadowColor: '#db153c',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 5
  },
  inputs: {
    marginTop: 20
  },
  shadowBox: {
    borderRadius: 5, 
    backgroundColor: '#fff', 
    elevation: 3, 
    padding: 10, 
    margin: 10, 
    alignSelf: 'center', 
    shadowColor: '#ccc',
    shadowOpacity: 0.000001,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 5
  },
  loginTexts: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  },
  input: {
    height: 45,
    borderRadius: 8,
    marginBottom: 13,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10
  },
  btn: {
    height: 60,
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 18,
  },
  btnContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
