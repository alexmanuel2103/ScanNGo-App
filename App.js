import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.contenedorprincipal}>
    <LinearGradient
        colors={['#D8A31A','#002244','#53273C','#110000']}
        style={styles.background}
      />
    
    <Text style={styles.welcome}>Welcome to Scan 'N Go</Text>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Login in</Text>
    </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorprincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    color: '#ffffff',
    fontSize: 34
  },
  button:{
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 15,
    width: 200,
    textAlign: 'center',
    alignContent: 'center',
    alignContent: 'center',
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


