import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,CheckBox} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Button } from 'react-native-web';

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
          <TextInput style={styles.inputtext} keyboardType='numeric' placeholder='Username'></TextInput>
          <TextInput style={styles.inputtext} secureTextEntry={true} placeholder='Password'></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}/>
            <Text style={styles.signedin}>Keep me signed in</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.textlogin}>Forgot password?</Text>
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
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10
  },
  inputtext:{
    height: 40,
    width: 300,
    margin: 12,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    color:'#ffffff',
    padding: 10
  },
  button:{
    backgroundColor: '#D8A31A',
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
  },
  checkbox:{
    backgroundColor: '#ffffff'
  },
  checkboxContainer:{
    flexDirection: "row",
    paddingTop: 20,
  },
  signedin:{
    color: '#ffffff',
    paddingLeft: 10,
    fontSize: 20
  },
  imagen:{
    height: 200,
    width: 200
  }
})