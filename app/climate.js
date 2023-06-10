import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import ClimateImg from '../assets/images/climate.png'
import { MaterialCommunityIcons, Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { pow } from 'react-native-reanimated';



const ClimateScreen = () => {

  const [temperature, setTemperature] = useState(48)
  const [powerOn, setPowerOn] = useState('')
  const [vent, setVent] = useState('')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="chevron-left-circle" size={40} color="#fff" onPress={() => navigation.goBack()} style={styles.chevron} />
      <ImageBackground source={ClimateImg} style={styles.climateImg} resizeMethod='auto' />

      <View style={styles.textCon}>
        <Text style={styles.climateText}> Interior 74 &#176;F - Exterior 66 &#176;F</Text>
      </View>
      <View style={styles.tempContainer}>
        <View>
          <Fontisto name="power" size={24} color={powerOn ? 'green' : 'red'} onPress={() => setPowerOn(!powerOn)} />
          <Text style={styles.powerText}>{powerOn ? 'On' : 'Off'}</Text>
        </View>
        <View style={styles.degCon}>
          <Ionicons name="chevron-back-outline" size={24} color="gray" onPress={() => setTemperature(temperature - 1)} />
          <Text style={styles.degText}>{temperature}&#176;</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" onPress={() => setTemperature(temperature + 1)} />
        </View>
        <View>
          <MaterialCommunityIcons name={powerOn == vent ? 'car-door-lock' : 'car-door'} size={30} color={vent == powerOn ? '#adb5bd' : '#57cc99'} />
          <Text style={styles.ventText}>{powerOn == vent ? 'Locked' : 'Open'}</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151616",
  },
  climateImg: {
    width: '100%',
    height: 650,
    zIndex: -1
  },
  chevron: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 10
  },
  textCon: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30
  },
  climateText: {
    fontSize: 20,
    color: "gray",
  },
  tempContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  powerText: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 10
  },
  degText: {
    fontSize: 30,
    color: "#c7f9cc",
    paddingHorizontal: 10
  },
  degCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  ventText: {
    fontSize: 16,
    color: '#fff',
    paddingTop: 10
  }

})
export default ClimateScreen;