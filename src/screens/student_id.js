import { StyleSheet, Text, View,Image} from 'react-native';
import Barcode from 'react-native-barcode-svg';

export default function App(){
    return(
        <View style={ID_student.contenedormain}>
            <View style={ID_student.studentID}>
              <Text style={ID_student.textID}>Alex Manuel Barraza Paniagua</Text>
              <Image style={ID_student.profilepic}  source={require('./assets/alexmanuel.png')}/>
              <Text style={ID_student.textCareer}>Information Technologies</Text>
              <Text style={ID_student.textGroup}>TIDBIS51M</Text>
              <Text style={ID_student.IDNumber}>6520150003</Text>
              <View style={ID_student.barcodestyle}>
              <Barcode value="6520150003" format="CODE128" lineColor='#ffffff' backgroundColor='#110000' maxWidth={200} height={100}/>
              </View>
            </View>    
        <View>
        </View>
        </View>
    );
}

const ID_student = StyleSheet.create({
  contenedormain:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  studentID:{
    backgroundColor: '#110000',
    borderRadius: 15,
    justifyContent: 'center',
    width: '300px',
    height: '500px'
  },
  textID:{
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center'
  },
  profilepic:{
    width: '150px',
    height: '150px',
    borderRadius: 20,
    marginBottom: 50,
    marginLeft: 70,
    marginRight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCareer:{
    color: '#ffffff',
    textAlign: 'center'
  },
  textGroup:{
    color: '#ffffff',
    textAlign: 'center'
  },
  IDNumber:{
    color: '#ffffff',
    textAlign: 'center'
  },
  barcodestyle:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 26
  }
})