import { View, Text, StyleSheet } from 'react-native'


const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Location</Text>
    </View>
  )
}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
export default LocationScreen;