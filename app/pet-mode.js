import { View, Text, StyleSheet } from 'react-native'


const PetModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pets</Text>
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
export default PetModeScreen;