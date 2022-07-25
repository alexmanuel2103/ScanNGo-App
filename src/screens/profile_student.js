import { StyleSheet,Text, View, Image} from 'react-native';



export default function App(){
  return(
    <View style={StudentProfile.contenedor_principal}>
      <Image style={StudentProfile.studentprofilepic} source={require('./assets/alexmanuel.png')}/>
      <Text>Student Profile</Text>
      <Text>Name: Alex Manuel Barraza Paniagua</Text>
      <Text>Group: TIDBIS51M</Text>
      <Text>Career: Information Technologies</Text>
      <Text>Student ID: 6520150003</Text>
      <Text>E-mail: a6520150003@utch.edu.mx</Text>
    </View>
  );
}

const StudentProfile = StyleSheet.create({
  contenedor_principal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  studentprofilepic:{
    height: 200,
    width: 200,
    borderRadius: 100
  }
})