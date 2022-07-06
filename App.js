import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

var logo = "< Scan N'Go >";

export default function App() {
  return (
    <View style={styles.contenedorprincipal}>
      <LinearGradient
        colors={['#D8A31A','#002244','#53273C','#110000']}
        style={styles.background}
      />
      <View>
        <View style={styles.caja}>
          <Text style={styles.welcome}> {logo} </Text>
          <Text style={styles.textlogin}>Username or Student ID</Text>
          <TextInput style={styles.inputtext} keyboardType='numeric'></TextInput>
          <Text style={styles.textlogin}>Password</Text>
          <TextInput style={styles.inputtext} secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Login in</Text>
          </TouchableOpacity>
        </View>
      </View>  
    </View>
    
  );
}

const styles = StyleSheet.create({
  contenedorprincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  caja:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 500,
    backgroundColor: '#110000',
    borderRadius: 7
  },
  welcome:{
    color: '#ffffff',
    fontSize: 34
  },
  textlogin:{
    color: '#ffffff',
    fontSize: 18
  },
  inputtext:{
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    color:'#000000',
    backgroundColor: '#ffffff',
    padding: 10
  },
  button:{
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 15,
    width: 200,
    borderRadius: 25
  },
  buttontext:{
    fontSize: 20,
    textAlign: 'center'
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  }
})